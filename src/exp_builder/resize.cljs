(ns ^:figh:weel-always exp-builder.resize
  (:require [om.next :as om]
            [exp-builder.data :as data]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as sp :refer [compiled-select]]))


;; Global Resizing.
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
      (axis node) (list (list equation))
      (orthogonal? partition axis) (cartesian-product recurse)
      :else (mapcat identity recurse))))

(defn solve-equations [equations window-size]
  (letfn [(solve [equation]
            (let [constants-xf (comp (filter :const) (map :num))
                  variables-xf (comp (filter :var) (map :num))
                  rhs (+ (- (transduce constants-xf + 0 equation)) window-size)]
              (/ rhs (transduce variables-xf + 0 equation))))
          (solve-equation [equation]
            (let [solution (solve equation)]
              (sequence (comp (filter :var)
                              (map (fn [term] (update term :num (partial * solution)))))
                        equation)))]
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


;; Top / Left positions.
(defn prev-siblings [children-path child-path]
  (let [children (get-in @data/state children-path)]
    (subvec children (last child-path))))


(defn all-subvecs [coll]
  (reduce (fn [acc index]
            (let [parent-path (or (last (last acc)) [])
                  children-path (conj parent-path :children)
                  child-path (conj children-path index)]
              (conj acc (vector parent-path children-path child-path))))
          []
          (take-nth 2 (next coll))))

(defn abs-position [path axis]
  "Computes left/top position of node, depending on axis."
  (->> (mapcat (fn [[parent-path children-path child-path]]
                 (let [parent (get-in @data/state parent-path)
                       new-node (assoc parent :children (prev-siblings children-path child-path))]
                   (when (orthogonal? (:partition new-node) axis)
                     (first (tree->equations new-node axis [])))))
               (all-subvecs path))
       (map :num)
       (reduce + 0)))


;; Mutate

(defn update-layout! [tree]
  (let [[width height] [(.-innerWidth js/window) (.-innerHeight js/window)]
        update-dim (fn [axis tree]
                     (-> tree
                         (tree->equations axis [])
                         (solve-equations (if (= axis :width) width height))
                         (equations->tree tree axis)))]
    (->> tree
         (update-dim :height)
         (update-dim :width))))
