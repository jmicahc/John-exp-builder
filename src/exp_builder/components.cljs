(ns ^:figwheel-always exp-builder.components
  #_(:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  #_(:require [om.next :as om :refer-macros [defui]]
            [cljs.core.async       #_[chan mult timeout put! alts! <! >!
                                     pipe take
                                     timeout dropping-buffer tap mult
                                     onto-chan]]
            [sablono.core :refer-macros [html]]
            [exp-builder.mutate :as mutate :refer [mutate-chan]]))
(comment

  (declare layout-component)


  (defn listen [event-struct multiple]
    {:pre [(not (empty? event-struct))]}
    (letfn [(walker [e]
              (go
                (let [b
                      (case (:type e)
                        
                        :or
                        (let [[v p]
                              (alts! [(walker (first (:children e)))
                                      (walker (second (:children e)))])]
                          true)

                        :and
                        (let [ch-first  (walker (first (:children e)))
                              ch-second (walker (second (:children e)))]
                          (<! ch-first)
                          (<! ch-second)
                          (do (take 1 ch-first) true))


                        :then
                        (do
                          (<! (walker (first (:children e))))
                          (<! (walker (second (:children e))))
                          true)

                        
                        :delay
                        (do
                          (<! (walker (first (:children e))))
                          (<! (timeout (or (:msecs e) 5000)))
                          true)

                        
                        :event
                        (<! (tap multiple
                                 (chan (dropping-buffer 1)
                                       (comp (filter #(= (:key %) (:key e)))
                                             (filter #(= (:uuid %) (:uuid e)))))))

                        (throw js/Error "fail"))]
                  (if b
                    (do
                      (if (:mutes e)
                        (go (onto-chan mutate-chan
                                       (:mutes e)
                                       false)))
                      true)
                    false))))]
      (go-loop []
        (let [v (<! (walker event-struct))]
          (print v)
          (recur)))))


  (def test-data
    {:type :or
     :mutes [{:mutate true
              :expr '[(window-resize)]}]
     :children
     [{:type :and
       :children
       [{:type :event
         :key :b
         :uuid 1}
        {:type :then
         :children [{:type :event
                     :key :c
                     :uuid 2}
                    {:type :event
                     :key :d
                     :uuid 3}]}]}
      {:type :event
       :key :a
       :uuid 0}]})

  (def ch-test (chan (dropping-buffer 1)))
  (def mult-test (mult ch-test))


  (when false
    (put! ch-test {:key :a :uuid 0})
    (put! ch-test {:key :b :uuid 0})
    (put! ch-test {:key :c :uuid 2})
    (put! ch-test {:key :d :uuid 3}))



  (defui Layout
    om/Ident
    (ident [this {:keys [uuid]}]
           [:node/uuid uuid])

    
    static om/IQuery
    (query [this]
           [:children :width :height
            :flexDirection :display
            :backgroundColor])

    
    Object
    (componentWillMount
     [this]
     (when-let [event-struct (:events (om/props this))]
       (let [write-ch (:to-chan (om/props this))
             multiple (mult write-ch)]
         (listen test-data multiple))))

    
    (render [this]
            (let [{:keys [width
                          height
                          partition
                          write-ch
                          backgroundColor]}
                  (om/props this)]
              
              (html [:div
                     {:onClick
                      (fn [e] 
                        (put! write-ch
                              (into (om/props this)
                                    {:shiftKey   e.shiftKey
                                     :ctrlKey    e.ctrlKey
                                     :altKey     e.altKey
                                     :component  this
                                     :click      true
                                     :key        :a
                                     :path       (om/path this)
                                     :name       e.type})))
                      :style
                      {:width width
                       :height height
                       :flexDirection (str (if (= partition :row) "column" "row"))
                       :transition-property "all"
                       :transition-duration "0.3s"
                       :display "flex"
                       :backgroundColor backgroundColor
                       :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 0.2)"}}
                     (om/children this)]))))


  (defui LayoutSelect
    Object
    (render [this]
            (html [:div
                   [:div
                    {:style
                     {:z-index 20
                      :width "100%"
                      :height "70px"
                      :transition-property "width" 
                      :transition-duration "0.3s"
                      :background-color "rgba(255,228,228,0.74)"
                      :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}]
                   (om/children this)])))


  (def layout-component (om/factory Layout))
  (def layout-select (om/factory LayoutSelect)))
