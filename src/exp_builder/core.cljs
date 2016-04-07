(ns ^:figwheel-always exp-builder.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]
                   [cljs.pprint :refer [pp]])
  (:require [exp-builder.data :as data]
            [com.stuartsierra.component :as component]
            [weasel.repl :as repl]
            [cljs.core.async :as async :refer
             [chan mult timeout put! alts! <! >!
              pipe take timeout dropping-buffer
              tap mult onto-chan]]
            [sablono.core :refer-macros [html]]
            [cljs.pprint :refer [pprint]]
            [goog.dom :as gdom]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]))


(declare rx)
(declare rx-build)
(declare reconciler)
(declare mutate-chan)



(enable-console-print!)


;; ===================================================
;; Util


(defn window-size []
  {:width (.-innerWidth js/window)
   :height (.-innerHeight js/window)})

;;fix later
(defn root-node [] (get-in @reconciler (get @reconciler :layout/node)))


;; ====================================================
;; Global Resizing.


(defn cartesian-product [node]
  "f: List X List X List --> List X List
     Computes cartesian cross product of list of lists of lists of elements.
     (((a b) (c d)) ((e f) (g h))) ==> ((a b e f) (a b g h) (c d e f) (c d g h))"
  (reduce (fn [left right]
            (mapcat (fn [lhs] (map #(concat lhs %) right)) left))
          (first node)
          (next node)))


;; ====================================================
;; Global Tree Resizing


(defn solve [equation]
  (let [axis     (:axis (first equation))
        win-size (axis (window-size))
        constant (- win-size
                    (transduce
                     (comp
                      (filter :const)
                      (map :num))
                     + 0 equation))
        coef     (apply + (map :coefficient (filter :var equation)))]
    (/ constant coef)))
 

(defn tree->width-equations
  [{:keys [width partition coef path] :as node}]
  (if width
    (list (list
           (merge node
                  {:num width
                   coef true
                   :axis :width
                   :max Infinity
                   :min 250})))
    (if (= partition :column)
      cartesian-product
      (partial apply concat))))


(defn tree->height-equations
  [{:keys [height partition coef] :as node}]
  (if height
    (list (list
           (merge
            node
            {:num height
             coef true
             :axis :height
             :max Infinity
             :min  250})))
    (if (= partition :row)
      cartesian-product
      (partial apply concat))))


(defn calc-extrema [equation rslt]
  (map (fn [{:keys [num min max var coefficient] :as term}]
         (if var
           (let [x (* rslt coefficient)]
             (if (<= x min)
               (assoc term :num min :const true :var false)
               (if (>= x max)
                 (assoc term :num max :const true :var false)
                 term)))
           term))
       equation))


(defn equation->tree!
  [[{:keys [axis var coefficient ident] :as term} & terms]]
  #_(print "ident" ident "term" term)
  (when term
    (when var
      (case axis
        :height
        (put! mutate-chan {:key 'update-height
                           :mutate true
                           :params term})
        :width
        (put! mutate-chan {:key 'update-width
                           :mutate true
                           :params term})))
    (recur terms)))

(defn updated-terms [equation]
  (let [solution (solve equation)]
    (into []
          (comp
           (filter :var)
           (map (fn [{:keys [coefficient] :as term}]
                  (assoc term :num (* solution coefficient)))))
          equation)))

(defn equations->tree!
  [[eq & eqs]]
  (when eq
    (equation->tree! (updated-terms eq))
    (recur eqs)))
   

(defn update-layout! [root]
  (do
    (->
     (rx root tree->width-equations)
     equations->tree!)
    (->
     (rx root tree->height-equations)
     equations->tree!)))


;; Remove, right?


(defn path= [[i1 & p1] [i2 & p2]]
  (if (= i1 i2)
    (if (and p1 p2)
      (recur p1 p2)
      (if (or p1 p2)
        false true))
    false))


(defn subpath? [[_ c1 & p1] [_ c2 & p2]]
  "returns true if path p1 is a proper sub-path of p2."
  (if c1
    (if (= c1 c2)
      (recur p1 p2)
      false)
    (if c2 true false)))



#_(defn display-subtree-rxf [path2 {:keys [path] :as node}]
  (if (subpath? path path2)
    (fn [c] (assoc node
                   :display "flex"
                   :children c))
    (if (path= path path2)
      (update-layout! (assoc node :display "flex"))
      (assoc node :display "none"))))


#_(defn display-subtree! [root-layout-node]
  (rx root-layout-node
      (partial display-subtree-rxf [])))



;; ===================================================
;; Node positions

(defn get-ancestors [node] 
  (loop [ancestors    []
         parent-ident (:parent node)]
    (if (nil? parent-ident)
      ancestors
      (let [parent-node (get-in @reconciler parent-ident)]
        (recur (conj ancestors parent-node)
               (:parent parent-node))))))


(defn get-ancestor-widths [node]
  (apply + (into [] (comp (map :width) (filter number?))
                 (get-ancestors node))))


(defn get-ancestor-heights [node]
  (apply + (into [] (comp (map :height) (filter nil?))
                 (get-ancestors node))))


(defn tree->width [node]
  (letfn [(walk [{:keys [partition width children]}]
            (if children
              (if width width
                  (if (= partition :row)
                    (fn [c] (+ (first c)))
                    (partial apply +)))
              0))]
    (let [w (get-ancestor-widths node)]
      (if (pos? w) w (rx node walk)))))


(defn tree->height [node]
  (letfn [(walk [{:keys [partition height children]}]
            (if children
              (if height height
                  (if (= partition :column)
                    (fn [c] (+ (first c)))
                    (partial apply +)))
              0))]
    (let [w (get-ancestor-heights node)]
      (if (pos? w) w (rx node walk)))))


(defn tree->left [path2 {:keys [path partition children] :as node}]
  (if (= partition :row)
    (partial apply +)
    (if (subpath? path path2)
      (fn [c]
        (let [n (nth path2 (inc (count path)))]
          (apply + (tree->width
                    (assoc node
                           :children
                           (subvec children 0 n)))
                 c)))
      0)))

(defn tree->top [path2 {:keys [path partition children] :as node}]
  (if (= partition :column)
    (partial apply +)
    (if (subpath? path path2)
      (fn [c]
        (let [n (nth path2 (inc (count path)))]
          (apply + (tree->height
                    (assoc node
                           :children
                           (subvec children 0 n)))
                 c)))
      0)))

(defn top-pos [{:keys [path] :as node}]
  (rx (root-node)
      (partial tree->top path)))


(defn left-pos [{:keys [path] :as node}]
  (rx (root-node)
      (partial tree->left path)))



(defn right-pos [node]
  (+
   (left-pos node)
   (rx node tree->width)))


(defn bottom-pos [node]
  (+
   (top-pos node)
   (rx node tree->height)))


;; ======================================================
;; Subtree Resizing


(defn left-sib? [p1 p2]
  (if (and
       (= (count p1) (count p2))
       (= (inc (last p1)) (last p2)))
    true false))


(defn right-sib? [p1 p2]
  (if (and
       (= (count p1) (count p2))
       (= (dec (last p1)) (last p2)))
    true false))


(defn update-left-adj-rxf
  [update-fn {:keys [children width partition] :as node}]
  (if width
    (update-fn node)
    (if (= partition :row)
      (fn [c] (assoc node :children c))
      (assoc-in node [:children (dec (count children))]
                (rx (last children)
                    update-left-adj-rxf)))))


(defn update-right-adj-rxf
  [update-fn {:keys [children width partition] :as node}]
  (if width
    (update-fn node)
    (if (= partition :row)
      (fn [c] (assoc node :children c))
      (assoc-in node [:children 0]
                (rx
                 (first children)
                 update-right-adj-rxf)))))


(defn update-top-adj-rxf
  [update-fn {:keys [children height partition] :as node}]
  (if height
    (update-fn node)
    (if (= partition :column)
      (fn [c] (assoc node :children c))
      (assoc-in node [:children (dec (count children))]
                (rx (last children)
                    update-top-adj-rxf)))))


(defn update-bottom-adj-rxf
  [update-fn {:keys [children height partition] :as node}]
  (if height
    (update-fn node)
    (if (= partition :column)
      (fn [c] (assoc node :children c))
      (assoc-in node [:children 0]
                (rx
                 (first children)
                 update-bottom-adj-rxf)))))


(defn update-neighbors-rxf [path2 key update-fn {:keys [path] :as node}]
  (cond
    (subpath? path path2)
    (fn [c] (assoc node :children c))

    (and (left-sib? path path2) (= key :left))
    (rx node (partial update-left-adj-rxf update-fn))

    (and (right-sib? path path2) (= key :right))
    (rx node (partial update-right-adj-rxf update-fn))

    (and (right-sib? path path2) (= key :top))
    (rx node (partial update-top-adj-rxf update-fn))

    (and (left-sib? path path2) (= key :bottom))
    (rx node (partial update-bottom-adj-rxf update-fn))
    
    :else node))


(defn update-neighbor! [path key update-fn state]
  (rx
   state
   (partial update-neighbors-rxf path key update-fn)))


;; =========================================================
;; Restore tree properties


(defn restore-tree-properties! [state path]
  (if path
    (recur (update-in state path dissoc :width :height)
           (next path))
    state))


(defn append-subtree! [state path node]
  (let [sibs (get-in state path)]
    (assoc-in state path (conj sibs node))))




;; =================================================
;; Dispatch



(defn rx
  [node children-fn]
  (let [x (children-fn node)]
    (if (fn? x)
      (x (mapv
          (fn [ident index]
            (rx (get-in @reconciler ident) children-fn))
          (:children node)
          (range)))
      x)))




;; ===================================
;; Mutate


(def mutate-chan (chan (dropping-buffer 10)
                       (filter :mutate)))



(defmulti mutate om/dispatch)



(defmethod mutate 'window-resize
  [{:keys [state]} key
   {:keys [ident]}]
  {:action #(update-layout! (get-in @state ident))})


 
(defmethod mutate 'add-attrs
  [{:keys [state]} key
   {:keys [ident attrs]}]
  {:action #(swap! state
                   (fn [state]
                     (update-in state
                                ident
                                merge
                                attrs)))})




(defmethod mutate 'update-width
  [{:keys [state]} key
   {:keys [ident num path] :as node}]
  {:action #(swap! state
                   (fn  [state]
                     (let [left (left-pos (get-in state ident))]
                       (update-in state
                                  ident
                                  assoc
                                  :width num
                                  :left  left
                                  :right (+ left num)))))})


(defmethod mutate 'update-height
  [{:keys [state]} key
   {:keys [ident num path]}]
  {:action #(swap! state
                   (fn [state]
                     (let [top (top-pos (get-in state ident))]
                       (update-in state
                                  ident
                                  assoc
                                  :height num
                                  :top    top
                                  :bottom (+ top num)))))})



(defmethod mutate :default
  [{:keys [state] :as env} key params]
  {:value :not-found})



(defrecord MutationChannel [reconciler]
  component/Lifecycle
  (start [{:keys [reconciler]}]
    (go-loop []
      (let [{:keys [params key]} (<! mutate-chan)]
        (om/transact! reconciler `[(~key ~params)])
        (recur)))


    ;; Fix later
    (let [resize-buffer (chan (dropping-buffer 1))
          state         @reconciler
          root-ident    (get state :layout/node)]
      (go-loop []
        (let [resize (<! resize-buffer)]
          (>! mutate-chan
              {:key 'window-resize
               :params {:ident root-ident}
               :mutate true})
          (<! (timeout 100))
          (recur)))
      
      (.addEventListener js/window "resize"
                         (fn [e]
                           (put! resize-buffer true))))
    reconciler)

  (stop [this]))

(defn start-mutation-channel [reconciler]
  (map->MutationChannel {:reconciler reconciler}))

;; =================================================
;; Selection

(def selection-chan (chan (dropping-buffer 10)))



(defmethod mutate 'testing
  [{:keys [state] :as env} key
   {:keys [uuid]}]
  {:action #(swap! state
                   (fn [state]
                     (update-in
                      state
                      [:uuid uuid]
                      (fn [props]
                        props))))})


(defrecord SelectionStateMachine [reconciler]

  component/Lifecycle
  
  (start [{:keys [reconciler]}]
    (go-loop []
      (let [{:keys [click ctrlKey shiftKey
                    selected component] :as event}
            (<! selection-chan)]
        (cond
          
          
          click
          nil
        
          :else nil)
        (>! mutate-chan event)
        (recur)))
    
    reconciler)

  (stop [this]))


(defn start-selection-machine [reconciler]
  (map->SelectionStateMachine {:reconciler reconciler}))  



;; ===========================================
;; Listen



(defn listen [event-struct multiple ident]
  {:pre [(not (empty? event-struct))]}
  (letfn
      [(walker [e]
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

                   
                   :not
                   (do
                     (<! (walker (first (:children e))))
                     false)
                      

                   :delay
                   (do
                     (<! (walker (first (:children e))))
                     (<! (timeout (or (:msecs e) 5000)))
                     true)

                      
                   :event
                   (<!
                    (tap multiple
                         (chan (dropping-buffer 5)
                               (comp (filter #(= (:key %) (:key e)))
                                     #_(filter #(= (:uuid %) (:uuid e)))))))

                   (throw js/Error "fail"))]
             (if b
               (do
                 (when-let [mutes (:mutes e)]
                   (go (>! mutate-chan
                           {:key    'window-resize
                            :params {:ident  ident}
                            :mutate true})))
                 true)
               false))))]
    (go-loop []
      (let [v (<! (walker event-struct))]
        (recur)))))


;; ============================================
;; Components


(defn selection-div
  [{:keys [top left bottom right] :as props}]
  (html [:div
         {:top top
          :left left
          :right right
          :bottom bottom
          :borderColor "red"}]))


(defn layout-div
  [{:keys [width height partition uuid to-chan
           backgroundColor] :as props} & children]
  (html [:div
         {:onClick
          (fn [e]
            (.stopPropagation e)
            (put!
             to-chan
             (into props
                   {:shiftKey   e.shiftKey
                    :ctrlKey    e.ctrlKey
                    :altKey     e.altKey
                    :click      true
                    :key        :a
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
         children]))



(defn mutate-path-identity [path ident]
  (let [mutation
        {:key 'add-attrs
         :mutate true
         :params {:ident ident
                  :attrs {:ident ident
                          :path (if (= path [:layout/node])
                                  []
                                  path)}}}]
    (put! mutate-chan mutation)))



(defn layout-will-mount [this]
  (when-let [events (:events (om/props this))]
    (listen events
            (:to-mult (om/props this))
            (om/get-ident this))))



(declare layout-inner)
(declare component)
(declare layout-leaf)
(declare selection-root)



(defui SelectedNode
  static om/Ident
  (ident [this {:keys [uuid]}]
         (print "@selectedNode:1identity1")
         [:selection uuid])
  Object
  (render [this]
          (let [{:keys [selection/top selection/left
                        selection/width selection/height]}
                (om/props this)]
            (html [:div
                   {:id "selection-node"
                    :onClick identity
                    :style {:zIndex  30
                            :display "inline"
                            :position "absolute"
                            :transition-property "all"
                            :transition-duration "0.3s"
                            :border-style "dotted"
                            :border-color "blue"
                            :border-width "3px"
                            :pointer-events "none"
                            :top    top
                            :left   left
                            :width  (- width 6)
                            :height (- height 6)}}]))))



(def selection-node (om/factory SelectedNode))



(defui Selection
  static om/IQuery
  (query [this]
         [:selection/top    :selection/left
          :selection/width  :selection/height
          :selection/bottom :selection/right])
  Object
  (render [this]
          (let [{:keys [top left bottom right children]} (om/props this)]
            (html [:div
                   [:div
                    {:id "selection-node"
                     :onClick identity
                     :style {:zIndex  30
                             :display "inline"
                             :position "absolute"
                             :transition-property "all"
                             :transition-duration "0.3s"
                             :border-style "dotted"
                             :border-color "blue"
                             :border-width "3px"
                             :pointer-events "none"
                             :top   top
                             :left  left
                             :width (- right (+ left 6))
                             :height (- bottom (+ top 6))}}]
                   (map selection-node children)]))))




(defui Layout
  static om/IQuery
  (query [this]
         '[:width :type :height :flexDirection
           :uuid :events :coefficient :to-chan
           :to-mult :partition :path :coef
           :parent :display :backgroundColor 
           {:children ...}]) 
  Object
  (render [this]
          (let [{:keys [children] :as props} (om/props this)]
            (layout-div props (map component children)))))




(defui Component
  static om/Ident
  (ident [this {:keys [type uuid children]}]
         (case type
           :layout  [:layout  uuid]
           :root    [:layout  uuid]))
  static om/IQuery
  (query [this]
         {:layout (om/get-query Layout)})
  Object
  (componentWillMount [this] (layout-will-mount this))
  (render [this]
          (let [{:keys [id] :as props} (om/props this)
                [type id] (om/get-ident this)]
            (({:layout layout-inner} type) props))))




(defui LayoutRoot
  static om/IQuery
  (query [this]
         [{:layout/node (om/get-query Component)}
          {:selection (om/get-query Selection)}])
  Object
  (render [this]
          (let [{:keys [layout/node selection]} (om/props this)]
            (html [:div {:id "layout-root" :style {:display "flex"}}
                   (print "selection" selection)
                   (selection-root selection)
                   (component node)]))))



(def selection-root (om/factory Selection))
(def component (om/factory Component))
(def layout-inner (om/factory Layout))


;; ========================================
;; Reader

(defmulti read om/dispatch)


(defn parse-children-idents
  [{:keys [parser data union-query state parent-ident] :as env}]
  (mapv (fn [ident]
          (parser (assoc env
                         :data (get-in @state ident)
                         :parent parent-ident)
                  ((first ident) union-query)))
        (:children data)))


(defmethod read :default
  [{:keys [data] :as env} k _]
  {:value (get data k)})


(defmethod read :selection
  [{:keys [data] :as env} k _]
  {:value (get data k)})


(defmethod read :selection
  [{:keys [state parser query union-query] :as env} k _]
  (let [st          @state
        node        (get st k)
        parse-child (fn [ident] (parser (assoc env :data (get-in st ident)) query))
        children    (mapv parse-child (:children node))]
      {:value
       {:left     (apply min (map :selection/left children))
        :top      (apply min (map :selection/top children))
        :bottom   (apply max (map :selection/bottom children))
        :right    (apply max (map :selection/right children))
        :children children}}))



(defmethod read :selection/width
  [{:keys [data]} k _]
  {:value (tree->width data)})


(defmethod read :selection/height
  [{:keys [data]} k _]
  {:value (tree->height data)})


(defmethod read :selection/top
  [{:keys [data path state] :as env} k _]
  {:value (top-pos data)})


(defmethod read :selection/left
  [{:keys [data]} k _]
  {:value (left-pos data)})


(defmethod read :selection/bottom
  [{:keys [data path state] :as env} k _]
  {:value (bottom-pos data)})


(defmethod read :selection/right
  [{:keys [data path state] :as env} k _]
  {:value (right-pos data)})


(defmethod read :children
  [{:keys [parser data union-query state] :as env} k _]
  (do
    (if-not (empty? (:children data))
      {:value (parse-children-idents env)}
      {:value nil})))


(defmethod read :layout/node
  [{:keys [state parser query ast] :as env} k _]
  (let [st @state
        [type id :as entry] (get st k)
        data    (get-in st entry)
        new-env (assoc env
                       :data data
                       :union-query query
                       :parent entry)
        value   (parser new-env (type query))]
    (do
      {:value value})))

 
;; =============================================
;; System

(defrecord Database [host port]
  component/Lifecycle
  (start [component]
    (let [state data/app-state]
      state))
  (stop [component]))


(defn db->app-state [host port]
  (map->Database {:host nil :port nil}))



(defrecord InitState [state]
  component/Lifecycle
  (start [{:keys [state]}]
    (letfn [(walker [to-chan path parent-ident
                     {:keys [children events uuid type] :as node}]
              (let [ident [:layout uuid]]
                (if events
                  (let [from-chan (chan (dropping-buffer 10))
                        from-mult (mult from-chan)]
                    (tap from-mult to-chan)
                    (assoc node
                           :to-chan   from-chan
                           :to-mult   from-mult
                           :path      path
                           :ident     ident
                           :parent    parent-ident
                           :children 
                           (mapv
                            (fn [c i]
                              (walker from-chan
                                      (conj path :children i)
                                      ident
                                      c))
                            children
                            (range))))
                  (assoc node
                         :to-chan    to-chan
                         :path       path
                         :ident      ident
                         :parent     parent-ident
                         :children
                         (mapv (fn [c i]
                                 (walker to-chan
                                         (conj path :children i)
                                         ident
                                         c))
                               children
                               (range))))))]
      (update
       state
       :layout/node
       (partial walker selection-chan [] nil))))

  (stop [app-state]))



(defn init-state [state-atom]
  (map->InitState {:state state-atom}))


(declare parser)
 

(defrecord Reconciler [state]
  component/Lifecycle
  (start [{:keys [state]}]

    (set! parser
          (om/parser
           {:read read
            :mutate mutate}))
    
    (set! reconciler
          (om/reconciler
           {:state  state
            :parser parser}))
    
    (om/add-root! reconciler
                  LayoutRoot
                  (gdom/getElement "app"))
    reconciler)
  (stop [state]))


(defrecord Time [mutation])


(defn start-reconciler [state]
  (map->Reconciler {:state state}))



(defn system [config-options]
  (let [{:keys [host port]} config-options]
    (component/system-map
     :db-state   (db->app-state host port)
     
     :init-state  (component/using
                   (init-state {})
                   {:state :db-state})

     :reconciler  (component/using
                   (start-reconciler {})
                   {:state :init-state})

     :selection   (component/using
                   (start-selection-machine {})
                   {:reconciler :reconciler})

     :mutation    (component/using
                   (start-mutation-channel {})
                   {:reconciler :reconciler}))))


(defn main [& args]
  (let [[host port] args]
    (component/start
     (system {:host host :port port}))))

(main {:host nil :port nil})


(defn on-js-reload [])
