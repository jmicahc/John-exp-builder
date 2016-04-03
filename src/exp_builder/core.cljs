(ns ^:figwheel-always exp-builder.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]
                   [cljs.pprint :refer [pp]])
  (:require [exp-builder.data :as data]
            #_[exp-builder.mutate :as mutate :refer [mutate-chan]]
            #_[exp-builder.resize :as resize]
            #_[exp-builder.components :as components]
            [com.stuartsierra.component :as component]
            #_[exp-builder.selection :as selection :refer [selection-chan]]
            [cljs.core.async :as async :refer
             [chan mult timeout put! alts! <! >!
              pipe take timeout dropping-buffer
              tap mult onto-chan]]
            #_[exp-builder.dispatch :refer [build-rx]]
            [sablono.core :refer-macros [html]]
            [cljs.pprint :refer [pprint]]
            [goog.dom :as gdom]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]))


(declare rx)
(declare rx-build)
(declare reconciler)


(enable-console-print!)

;; ===================================================
;; Util


(defn window-size []
  {:width (.-innerWidth js/window)
   :height (.-innerHeight js/window)})


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
  [{:keys [width partition coef ident
           coefficient min-width path]}]
  (if width
    (list (list {:num width
                 coef true
                 :axis :width
                 :coefficient coefficient
                 :ident ident
                 :max Infinity
                 :min 250
                 :path (conj path :width)}))
    (if (= partition :column)
      cartesian-product
      (partial apply concat))))


(defn tree->height-equations
  [{:keys [height ident partition coef
           coefficient min-height path]}]
  (if height
    (list (list {:num height
                 coef true
                 :axis :height
                 :coefficient coefficient
                 :ident ident
                 :max Infinity
                 :min  250
                 :path (conj path :height)}))
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


(defn solve-equation [equation]
  (let [solution (solve equation)]
    (map (fn [{:keys [var num coefficient]}]
           (if var (* coefficient solution) num))
         equation)))


(defn equation->tree!
  [[{:keys [path axis num var coefficient ident] :as term} & terms] rslt]
  (when term
    (when var
      (let [x (* coefficient rslt)]
        (case axis
          :height (om/transact! reconciler
                                `[(update-height {:ident ~ident
                                                  :height ~x})])
          :width  (om/transact! reconciler
                                `[(update-width {:ident ~ident
                                                 :width ~x})]))))
    (recur terms
           rslt)))



(defn equations->tree!
  [[eq & eqs]]
  (when eq
    (equation->tree! eq (solve eq))
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


(defn display-subtree-rxf [path2 {:keys [path] :as node}]
  (if (subpath? path path2)
    (fn [c] (assoc node
                   :display "flex"
                   :children c))
    (if (path= path path2)
      (update-layout! (assoc node :display "flex"))
      (assoc node :display "none"))))


(defn display-subtree! [path root-identity]
  (rx root-identity
      (partial display-subtree-rxf path)))



;; ===================================================
;; Node positions


(defn add-ancestor-widths [path2 {:keys [path width]}]
  (if (subpath? path path2)
    (if width width
      (partial apply +))
    0))


(defn add-ancestor-heights [path2 {:keys [path height]}]
  (if (subpath? path path2)
    (if height height
      (partial apply +))
    0))


(defn tree->width [{:keys [partition width children root path] :as node}]
  (if children 
    (if root
      (partial apply +
               (rx
                (:root @data/app-state)
                (partial add-ancestor-widths path)))
      (if width width
          (if (= partition :row)
            (fn [c] (+ (first c)))
            (partial apply +))))
      0))


(defn tree->height [{:keys [partition width height children root path]}]
  (if children
    (if root
      (partial apply +
               (rx
                (:root @data/app-state)
                (partial add-ancestor-heights path))))
    (if height height
        (if (= partition :column)
          (fn [c] (+ (first c)))
          (partial apply +)))))


(defn tree->left [path2 {:keys [path partition children]}]
  (if (= partition :row)
    (partial apply +)
    (if (subpath? path path2)
      (fn [c]
        (let [n (nth path2 (inc (count path)))]
          (apply + (rx
                    {:children (subvec children 0 n)}
                    tree->width)
                 c)))
      0)))


(defn tree->top [path2 {:keys [path partition children]}]
  (if (= partition :column)
    (partial apply +)
    (if (subpath? path path2)
      (fn [c]
        (let [n (nth path2 (inc (count path)))]
          (apply + (rx
                    {:children (subvec children 0 n)}
                    tree->height)
                 c)))
      0)))


(defn top-pos [path]
  (rx
   (:root @data/app-state)
   (partial tree->top path)))


(defn bottom-pos [path]
  (+ (top-pos path)
     (rx
      (get-in (:root @data/app-state) path)
      tree->height)))


(defn left-pos [path]
  (rx
   (:root @data/app-state)
   (partial tree->left path)))


(defn right-pos [path]
  (+ (left-pos path)
     (rx
      (get-in (:root @data/app-state) path)
      tree->width)))


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



(defn rx [node outer]
  (let [x (outer node)]
    (if (fn? x)
      (x (mapv
          (fn [ident]
            (rx (assoc
                 (get-in @reconciler ident)
                 :ident ident)
                outer))
          (:children node)))
      x)))




;; ===================================
;; Mutate



(def mutate-chan (chan (dropping-buffer 10)
                       (filter :mutate)))


(defmulti mutate om/dispatch)


(defmethod mutate 'window-resize
  [{:keys [state] :as env} k _]
  {:action #(display-subtree!
             [] (assoc (get-in @state (:layout/node @state))
                       :ident [:layout-inner 0]))})


(defmethod mutate `update-width
  [{:keys [state]} k
   {:keys [ident width]}]
  {:action #(swap! state
                   (fn  [state]
                     (assoc-in state
                               (conj ident :width)
                               width)))})

(defmethod mutate `update-height
  [{:keys [state]} k
   {:keys [ident height]}]
  {:action #(swap! state
                   (fn [state]
                     (assoc-in state
                               (conj ident :height)
                               height)))})


(defmethod mutate :default
  [{:keys [state] :as env} key params]
  {:value :not-found})


(defrecord MutationChannel [reconciler]
  
  component/Lifecycle
  
  (start [{:keys [reconciler]}]
    
    (go-loop []
      (let [m (<! mutate-chan)]
        (om/transact! reconciler (:exprp m))
        (recur)))

    (.addEventListener js/window "resize"
                       #(put! mutate-chan
                              {:expr '[(window-resize)]}))
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
          (om/transact! reconciler '[(window-resize {:uuid 10})])
        
          :else nil)
        (>! mutate-chan event)
        (recur)))
    
    reconciler)

  (stop [this]))


(defn start-selection-machine [reconciler]
  (map->SelectionStateMachine {:reconciler reconciler}))  


;; ===========================================
;; Listen

(defn listen [event-struct multiple]
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
                   (<! (tap multiple
                            (chan (dropping-buffer 5)
                                  (comp (filter #(= (:key %) (:key e)))
                                        (filter #(= (:uuid %) (:uuid e)))))))

                   (throw js/Error "fail"))]
             (if b
               (do
                 (when-let [mutes (:mutes e)]
                   (go (onto-chan selection-chan mutes false)))
                 true)
               false))))]
    (go-loop []
      (let [v (<! (walker event-struct))]
        (recur)))))

;; ============================================
;; Components

(defn layout-div
  [{:keys [width height partition uuid to-chan
           backgroundColor] :as props} & children]
  (html [:div
            {:onClick
             (fn [e]
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


(declare layout-leaf)
(declare layout-inner)
(declare layout-composite)


(defui LayoutInner
  static om/IQuery
  (query [this]
         '[:width :height :flexDirection :uuid
           :to-chan :to-mult :partition
           :display :backgroundColor {:children ...}])

  Object
  (render [this]
          (let [{:keys [children] :as props} (om/props this)]
            (layout-div props (map layout-inner children)))))


(defui LayoutLeaf
  static om/IQuery
  (query [this]
         '[:width :height :flexDirection :uuid :display
           :partition :to-chan :to-mult :events
           :backgroundColor])
  
  Object
  (render [this]
          (layout-div (om/props this))))


(defui LayoutComposite
  static om/Ident
  (ident [this {:keys [uuid children]}]
         (if-not (empty? children)
           [:layout-inner uuid]
           [:layout-leaf uuid]))

  static om/IQuery
  (query [this]
         {:layout-leaf (om/get-query LayoutLeaf)
          :layout-inner (om/get-query LayoutInner)})
  
  Object
  (componentWillMount
   [this]
   (when-let [events (:events (om/props this))]
     (listen events (:to-mult (om/props this)))))
  (render [this]
          (let [{:keys [uuid] :as props} (om/props this)
                [type id] (om/get-ident this)]
            (({:layout-leaf layout-leaf
               :layout-inner layout-inner} type) props))))


(defui LayoutRoot
  static om/IQuery
  (query [this]
         [{:layout/node (om/get-query LayoutComposite)}])

  Object
  (render [this]
          (let [{:keys [layout/node]} (om/props this)]
            (html [:div {:id "layout-root" :style {:display "flex"}}
                   (layout-composite node)]))))


(def layout-composite (om/factory LayoutComposite))
(def layout-inner (om/factory LayoutInner))
(def layout-leaf  (om/factory LayoutLeaf))


;; ========================================
;; Reader

(defmulti read om/dispatch)


(defmethod read :default
  [{:keys [data] :as env} k _]
  {:value (get data k)})


(defmethod read :children
  [{:keys [parser data union-query state] :as env} k _]
  (let [st @state
        f #(parser (assoc env :data (get-in st %))
                   ((first %) union-query))]
    {:value (into []
                  (map f)
                  (:children data))}))


(defmethod read :layout/node
  [{:keys [state parser query ast] :as env} k _]
  (let [st @state
        [type id :as entry] (get st k)
        data    (get-in st entry)
        new-env (assoc env
                       :data data
                       :union-query query)
        value (parser new-env (type query))]
    {:value value}))


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


(defrecord Channels [state]

  component/Lifecycle

  (start [{:keys [state]}]
    (letfn [(walker [to-chan {:keys [children events] :as node}]
              (if events
                (let [from-chan (chan (dropping-buffer 10))
                      from-mult (mult from-chan)]
                  (tap from-mult to-chan)
                  (assoc node
                         :to-chan from-chan
                         :to-mult from-mult
                         :children (map #(walker from-chan %)
                                        children)))
                (assoc node
                       :to-chan  to-chan
                       :children (mapv #(walker to-chan %)
                                       children))))]
      (update
       state
       :layout/node
       (partial walker selection-chan))))

  (stop [app-state]))



(defn add-channels [state-atom]
  (map->Channels {:state state-atom}))




(defrecord Reconciler [state]
  
  component/Lifecycle
  
  (start [{:keys [state]}]
    
    (set! reconciler
          (om/reconciler
           {:state  state
            :parser (om/parser
                     {:read read
                      :mutate mutate})}))
    
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
     
     :app-state   (db->app-state host port)

     
     :with-chans  (component/using
                   (add-channels {})
                   {:state :app-state})
     

     :reconciler  (component/using
                   (start-reconciler {})
                   {:state :with-chans})

     :selection   (component/using
                   (start-selection-machine {})
                   {:reconciler :reconciler})

     :mutation    (component/using
                   (start-mutation-channel {})
                   {:reconciler :reconciler}))))

;; ==========================================
;; tests

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
  (put! mutate-chan {:key :a :uuid 0})
  (put! ch-test {:key :b :uuid 0})
  (put! ch-test {:key :c :uuid 2})
  (put! ch-test {:key :d :uuid 3}))



(defn main [& args]
  (let [[host port] args]
    (component/start
     (system {:host host :port port}))))

(main {:host nil :port nil})


(defn on-js-reload [])
