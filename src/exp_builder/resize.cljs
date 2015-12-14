(ns ^:figh:weel-always exp-builder.resize
  (:require [om.next :as om]
            [exp-builder.data :as data]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as sp :refer [compiled-select]]))

(defn equation [node axis path]
  (when-let [v (axis node)]
    (let [node {:path path :coef (:coef node) :num v}]
      (list node))))

(defn cartesian-product [node]
    "f: List X List X List --> List X List

     Computes cartesian cross product of list of lists of lists of elements.

     (((a b) (c d)) ((e f) (g h))) ==> ((a b e f) (a b g h) (c d e f) (c d g h))"
    (reduce (fn [left right]
              (mapcat (fn [lhs] (map #(concat lhs %) right)) left))
            (first node)
            (next node)))

(defn LxLxL->LxL [parent-node children]
  (let [t (mapcat (partial map (partial concat parent-node))
                  children)]
    (if (empty? t) (list parent-node) t)))

(defn orthogonal? [parent axis]
  "Returns true if parent node is a partition of children
   that is orthogonal to axis. Otherwise returns false."
  (match [axis (:partition parent)]
         [:height :row] true
         [:width  :row] false
         [:height :column] false
         [:width  :column] true
         :else false))

(defn *equations* [parent axis path]
  "f: G --> List X List

   Given a directed acyclic graph of components, returns
   a lists of lists, where each inner list represents
   a linear equation for a path from left/top to right/bottom 
   for axis = :width/:height. Each element of each equation has the 
   form:

      {:path .. :coef .. :num xc..}

   path --> [ (keyword | number)* ] (path to original component location)
   coef --> :const | :var           (constant or variable algabraic term)
   num  --> number                  (represnets height or width depending
                                     on axis)
   "
  (cond
    (orthogonal? parent axis)
    (cartesian-product (map #(*equations* %1 axis (into [] (concat path [:children %2])))
                            (:children parent) (range)))

    (empty? (:children parent))
    (let [node (equation parent axis path)]
      (if node (list node) nil))

    :else (LxLxL->LxL (equation parent axis path)
                      (map #(*equations* %1 axis (into [] (concat path [:children %2])))
                           (:children parent) (range)))))

(defn tree->equations [root axis]
  (if (orthogonal? root axis)
    (map #(concat (equation root axis []) %)
         (cartesian-product (map #(*equations* %1 axis [:children %2]) (:children root) (range))))
    (*equations* root axis [])))

(defn solve-equations [equations]
  (let [solve (fn [coll]
                 (let [constants (map :num (filter #(= (:coef %) :const) coll))
                       variables (map :num (filter #(= (:coef %) :var) coll))
                       rhs (- (reduce + constants))]
                   (/ rhs (reduce + variables))))]
    (sp/transform [sp/ALL (sp/collect sp/ALL)
                   sp/ALL #(= (:coef %) :var) :num]
                  (fn [eq num] (let [x (solve eq)] (* x num)))
                  equations)))

(defn equation->tree [eqs app-tree axis]
  (if-let [equation (first eqs)]
    (recur (next eqs)
           (assoc-in app-tree (conj (:path equation) axis) (:num equation))
           axis)
    app-tree))

(defn equations->tree [all-equations app-tree axis]
  (cond
    (empty? all-equations) app-tree
    :else (recur (next all-equations)
                 (equation->tree (first all-equations) app-tree axis)
                 axis)))

(defn update-layout! [tree]
  (let [[width height] [(.-innerWidth js/window) (.-innerHeight js/window)]
        tree (assoc (assoc tree :height (- height)) :width (- width))
        updated-widths-tree (-> tree
                                (tree->equations :width)
                                solve-equations
                                (equations->tree tree :width))]
    (-> updated-widths-tree
        (tree->equations :height)
        solve-equations
        (equations->tree updated-widths-tree :height))))




(defn prev-siblings [children-path child-path]
  (let [children (get-in (:components @data/state) children-path)]
    (subvec children 0 (last child-path))))

(defn cummulative-subvecs [coll]
  (reduce (fn [acc x]
            (conj acc (conj (or (peek acc) []) x))) [] coll))

(defn root-node? [node]
  (= (:path node) [:components]))

(defn abs-position [node axis]
  "Computes left/top position of node, depending on axis."
  (let [path (:path node)]
    (reduce #(if (root-node? %2) %1 (+ %1 (:num %2))) 0
            (reduce (fn [acc paths] (concat acc (first paths))) '()
                    (map (fn [[children-path child-path]]
                           (let [parent-path (subvec children-path 0 (- (count children-path) 1))
                                 parent (get-in (:components @data/state) parent-path)
                                 new-node (assoc parent :children (prev-siblings children-path child-path))]
                             (when (orthogonal? new-node axis)
                               (tree->equations new-node axis))))
                         (partition 2 (cummulative-subvecs path)))))))
