
(ns ^:figwheel-always exp-builder.resize
  #_(:require [om.next :as om]
              [exp-builder.data :as data]
              [exp-builder.dispatch :refer [rx]]))
;; ===================================================
;; Util

(comment


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
    [{:keys [width #_margin-left partition coef
             coefficient min-width path]}]
    (if width
      (list (list {:num width
                   coef true
                   :axis :width
                   :coefficient coefficient
                   :max Infinity
                   :min 250
                   :path (conj path :width)}
                  #_{:num (or margin-left 0)
                     :const true}))
      (if (= partition :column)
        cartesian-product
        (partial apply concat))))


  (defn tree->height-equations
    [{:keys [height #_margin-top
             partition coef coefficient min-height path]}]
    (if height
      (list (list {:num height
                   coef true
                   :axis :height
                   :coefficient coefficient
                   :max Infinity
                   :min  250
                   :path (conj path :height)}
                  #_{:num margin-top
                     :const true}))
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


  (defn equation->tree
    [[{:keys [path num var coefficient] :as eq} & eqs] tree rslt]
    (if eq
      (recur eqs
             (assoc-in
              tree path
              (if var
                (* coefficient rslt)
                num))
             rslt)
      tree))


  (defn solve-equation [equation]
    (let [solution (solve equation)]
      (map (fn [{:keys [var num coefficient]}]
             (if var (* coefficient solution) num))
           equation)))


  (defn equations->tree
    [[eq & eqs] tree]
    (if eq
      (recur eqs
             (equation->tree eq tree (solve eq)))
      tree))
  

  (defn update-layout! [root]
    (let [x
          (->
           (rx root tree->width-equations)
           (equations->tree root))]
      (->
       (rx x tree->height-equations)
       (equations->tree x))))


  (defn path= [[i1 & p1] [i2 & p2]]
    (if (= i1 i2)
      (if (and p1 p2)
        (recur p1 p2)
        (if (or p1 p2)
          false true))
      false))


  (defn subpath? [[_ c1 & p1] [_ c2 & p2]]
    "retruns true if path p1 is a proper sub-path of p2."
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


  (defn display-subtree! [path tree]
    (rx tree (partial display-subtree-rxf path)))





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
      (assoc-in state path (conj sibs node)))))
