(ns ^:figh:weel-always exp-builder.resize
  (:require [om.next :as om]
            [exp-builder.data :as data]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as sp :refer [compiled-select]]))

(defn mapcatmap [f coll]
  "mapcat with map with f on coll."
  (mapcat (partial map f) coll))

(defn cartesian-product [node]
    "f: List X List X List --> List X List
     Computes cartesian cross product of list of lists of lists of elements.
     (((a b) (c d)) ((e f) (g h))) ==> ((a b e f) (a b g h) (c d e f) (c d g h))"
    (reduce (fn [left right]
              (mapcat (fn [lhs] (map #(concat lhs %) right)) left))
            (first node)
            (next node)))

(defn orthogonal? [partition axis]
  "Returns true if parent node is a partition of children
   that is orthogonal to axis. Otherwise returns false."
  (match [axis partition]
         [:height :row] true
         [:width  :row] false
         [:height :column] false
         [:width  :column] true
         :else false))


(defn tree->equations [{:keys [type coef children partition] :as node} axis path]
  (let [path-gen (sequence (map #(conj path :children %)) (range))
        recurse  (map #(tree->equations %1 axis %2) children path-gen)
        equation {:path path coef true :num (axis node)}]
    (cond
      (and (not= type :root) (axis node))
      (list (list equation))

      (and (orthogonal? partition axis) (= type :root))
      (map (partial cons equation) (cartesian-product recurse))

      (orthogonal? partition axis)
      (cartesian-product recurse)
      
      :else
      (if (axis node)
        (mapcatmap (partial cons equation) recurse)
        (mapcat identity recurse)))))

(defn solve-equations [equations]
  (letfn [(solve [equation]
            (let [constants-xf (comp (filter :const) (map :num))
                  variables-xf (comp (filter :var) (map :num))
                  rhs (- (transduce constants-xf + 0 equation))]
              (/ rhs (transduce variables-xf + 0 equation))))
          (solve-equation [equation]
            (let [solution (solve equation)
                  apply-solution (comp (filter :var)
                                       (map (fn [term] (update term :num (partial * solution)))))]
              (sequence apply-solution equation)))]
    (map solve-equation equations)))

(defn equation->tree [eqs app-tree axis]
  (if-let [equation (first eqs)]
    (recur (next eqs)
           (assoc-in app-tree (conj (:path equation) axis) (:num equation))
           axis)
    app-tree))

(defn equations->tree [all-equations app-tree axis]
  (if (empty? all-equations)
    app-tree
    (recur (next all-equations)
                 (equation->tree (first all-equations) app-tree axis)
                 axis)))

(defn update-layout! [tree]
  (let [[width height] [(.-innerWidth js/window) (.-innerHeight js/window)]
        update-dim (fn [axis tree]
                     (-> (assoc tree axis (- (if (= axis :width) width height)))
                         (tree->equations axis [])
                         solve-equations
                         (equations->tree tree axis)
                         (dissoc axis)))]
    (update-dim :height (update-dim :width tree))))


(defn prev-siblings [children-path child-path]
  (let [children (get-in @data/state children-path)]
    (subvec children 0 (last child-path))))

(defn partition-width [f x coll]
  (map f (partition x coll)))

(defn cummulative-subvecs [coll]
  (partition 2 (reduce (fn [acc x]
                         (conj acc (conj (last acc) x)))
                       (vector (vector (first coll)))
                       (next coll))))

(defn root-node? [node]
  (= (:type node) :root))

(defn abs-position [path axis]
  "Computes left/top position of node, depending on axis."
  (->> (mapcat (fn [[children-path child-path]]
                 (let [parent-path (subvec children-path 0 (- (count children-path) 1))
                       parent (get-in @data/state parent-path)
                       new-node (assoc parent :children (prev-siblings children-path child-path))]
                   (when (orthogonal? (:partition new-node) axis)
                     (first (tree->equations new-node axis [])))))
               (cummulative-subvecs path))
       (filter :num)
       (map :num)  ;; yield size
       (reduce + 0))) ;; sum sizes

(def p1 [:children 1 :children 1 :children 0 :children 0])
(get-in @data/state p1)
(abs-position p1 :height)

@data/state
