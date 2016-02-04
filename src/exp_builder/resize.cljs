(ns ^:figh:weel-always exp-builder.resize
  (:require [om.next :as om]
            [exp-builder.data :as data]))

(defn window-size []
  {:width (.-innerWidth js/window)
   :height (.-innerHeight js/window)})

;; Global Resizing.
(defn cartesian-product [node]
  "f: List X List X List --> List X List
     Computes cartesian cross product of list of lists of lists of elements.
     (((a b) (c d)) ((e f) (g h))) ==> ((a b e f) (a b g h) (c d e f) (c d g h))"
  (reduce (fn [left right]
            (mapcat (fn [lhs] (map #(concat lhs %) right)) left))
          (first node)
          (next node)))


(defn tree-recurse
  ([node outer] (tree-recurse (assoc node :root true) outer []))
  ([{:keys [children] :as form} outer path]
   (letfn [(inner [form index]
             (let [new-path (conj path :children index)
                   new-form (assoc form :path new-path)
                   x (outer new-form)]
               (if (not (fn? x))
                 x
                 (tree-recurse new-form outer new-path))))]
     (if (sequential? children)
       (let [x (outer form)]
        (if (fn? x)
          (x (mapv inner children (range)))
          x))
       (outer form)))))


(defn solve [equation]
  (let [axis     (:axis (first equation))
        win-size (axis (window-size))
        constant (- win-size
                    (transduce (comp
                                (filter :const)
                                (map :num))
                               + 0 equation))
        coef     (apply + (map :num (filter :var equation)))]
    (/ constant coef)))


(defn tree->width-equations [{:keys [width partition coef path]}]
  (if width
    (list (list {:num width
                 coef true
                 :axis :width
                 :path (conj path :width)}))
    (if (= partition :column)
      cartesian-product
      (partial apply concat))))


(defn tree->height-equations [{:keys [height partition coef path]}]
  (if height
    (list (list {:num height
                 coef true
                 :axis :height
                 :path (conj path :height)}))
    (if (= partition :row)
      cartesian-product
      (partial apply concat))))


(defn equation->tree
  [[{:keys [path num] :as eq} & eqs] tree rslt]
  (if eq
    (recur eqs
           (assoc-in tree path
                     (* num rslt))
           rslt)
    tree))


(defn equations->tree
  [[eq & eqs] tree]
  (if eq
    (recur eqs
           (equation->tree eq tree (solve eq)))
    tree))

(defn subpath? [[_ c1 & p1] [_ c2 & p2]]
  "retruns true if path p1 is a proper sub-path of p2."
  (if c1
    (if (= c1 c2)
      (recur p1 p2)
      false)
    (if c2 true false)))


(defn add-ancestors [path2 {:keys [path width]}]
  (if (subpath? path path2)
    (if width
      (partial apply + width)
      (partial apply +))
    0))


(defn tree->width [{:keys [partition width children root path] :as node}]
  (if children 
      (if root (partial apply +
                        (tree-recurse
                         (:root @data/state)
                         (partial add-ancestors path)))
          (if width width
              (if (= partition :row)
                (fn [c] (+ (first c)))
                (partial apply +))))
      0))


(defn tree->height [{:keys [partition width height children]}]
  (if height height
      (if (= partition :column)
        (fn [c] (+ (first c)))
        (partial apply +))))


(defn tree->left [path2 {:keys [path partition children]}]
  (if (= partition :row)
    (partial apply +)
    (if (subpath? path path2)
      (fn [c]
        (let [n (nth path2 (inc (count path)))]
          (apply + (tree-recurse
                    {:children (subvec children 0 n)}
                    tree->width)
                 c)))
      0)))

(tree-recurse (:root @data/state)
              (partial tree->left [:children 1 :children 1 :children 1 :children 0]))


(defn tree->top [path2 {:keys [path partition children]}]
  (if (= partition :column)
    (partial apply +)
    (if (subpath? path path2)
      (fn [c]
        (let [n (nth path2 (inc (count path)))]
          (apply + (tree-recurse
                    {:children (subvec children 0 n)}
                    tree->height)
                 c)))
      0)))


(defn update-layout! [root]
  (let [x
        (->
         (tree-recurse root tree->width-equations)
         (equations->tree root))]
    (->
     (tree-recurse x tree->height-equations)
     (equations->tree x))))

(defn path= [[i1 & p1] [i2 & p2]]
  (if (= i1 i2)
    (if (and p1 p2)
      (recur p1 p2)
      (if (or p1 p2)
        false
        true))
    false))

(defn display-subtree-rxf [path2 {:keys [path children] :as node}]
  (if (subpath? path path2)
    (fn [c] (assoc node :children c))
    (if (path= path path2)
      (update-layout! node)
      (assoc node
             :display "none"
             :children children))))

(tree-recurse (:root @data/state) (partial
                                   display-subtree-rxf
                                   [:children 1]))


(defn display-subtree! [path tree]
  (tree-recurse tree (partial display-subtree-rxf path)))

(defn filter-rxf [{:keys [height children] :as node}]
  (if children
    (if height
      (partial concat [node])
      (partial apply concat))
    (if height
      [node]
      nil)))
