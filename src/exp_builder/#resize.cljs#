(ns exp-builder.resize
  (:require [om.core :as om :include-macros :true]
            [exp-builder.data :as data]
            [com.rpl.specter :as sp :refer [compiled-select]]))

(defn dim-node? [node axis]
  (when-let [v (axis node)]
    (let [node {:path (:path node) :coef (:coef node) :num v}]
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
  (cond
    (and (= :height axis) (= :C (:type parent))) true
    (and (= :width axis) (= :C (:type parent))) false
    (and (= :height axis) (= :R (:type parent))) false
    (and (= :width axis) (= :R (:type parent))) true))

(defn *equations* [parent axis]
  "f: G --> List X List

   Given a directed acyclic graph of components, returns
   a lists of lists, where each inner list represents
   a linear equation for a path from left/top to right/bottom 
   for axis = :width/:height. Each element of each equation has the 
   form:

      {:path .. :coef .. :num ..}

   path --> [ (keyword | number)* ] (path to original component location)
   coef --> :const | :var           (constant or variable algabraic term)
   num  --> number                  (represnets height or width depending
                                     on axis)
   "
  (cond
    (orthogonal? parent axis)
    (cartesian-product (map #(*equations* % axis) (:C parent)))

    (empty? (:C parent))
    (let [node (dim-node? parent axis)]
      (if node (list node) nil))

    :else (LxLxL->LxL (dim-node? parent axis)
                      (map #(*equations* % axis) (:C parent)))))

(defn equations [parent axis]
  "Root of tree handled uniquely since it represents window 
   size, and therefore has definite width AND height.
   Here we concatinate the nagation of width/height (depending
   on axis) to each computed path, so that equations are in 
   normal form (i.e. set equal to 0)."
  (cond
    (orthogonal? parent axis)
    (map #(concat (dim-node? parent axis) %)
         (cartesian-product (map #(*equations* % axis) (:C parent))))

    :else (*equations* parent axis)))

(defn prev-siblings [children-path child-path]
  (let [children (get-in (data/root-children) children-path)]
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
                                 parent (get-in (data/root-children) parent-path)
                                 new-node (assoc parent :C (prev-siblings children-path child-path))]
                             (when (orthogonal? new-node axis)
                               (equations new-node axis))))
                         (partition 2 (cummulative-subvecs path)))))))


(defn *solve-linear-eq* [constants variables]
  "Solves a linear equation for zero."
  (let [rhs (- (reduce + constants))]
    (/ rhs (reduce + variables))))

(defn solve-linear-eq [coll]
  (*solve-linear-eq* (map :num (filter #(= (:coef %) :const) coll))
                     (map :num (filter #(= (:coef %) :var) coll))))

(defn solve-linear-eqs [equations]
  (sp/transform [sp/ALL (sp/collect sp/ALL)
                 sp/ALL #(= (:coef %) :var) :num]
                (fn [path num]
                  (let [x (solve-linear-eq path)]
                    (* x num)))
                equations))


(defn width-equations->tree [equations app-tree]
  (let [update (fn update [eqs m]
                      #_(println eqs)
                      (if-let [equation (first eqs)]
                        (recur (next eqs)
                               (assoc-in m (conj (:path equation) :width)
                                         (:num equation)))
                        m))]
    (update equations app-tree)))

(defn all-width-equations->tree [all-equations app-tree]
  (cond
    (empty? all-equations) app-tree
    :else (recur (next all-equations)
                 (width-equations->tree (first all-equations) app-tree))))

(defn height-equations->tree [equations app-tree]
  (let [update (fn update [eqs m]
                      (if-let [equation (first eqs)]
                        (recur (next eqs)
                               (assoc-in m (conj (:path equation) :height)
                                         (:num equation)))
                        m))]
    (update equations app-tree)))

(defn all-height-equations->tree [all-equations app-tree]
  (cond
    (empty? all-equations) app-tree
    :else (recur (next all-equations)
                 (height-equations->tree (first all-equations) app-tree))))

(defn all-equations->tree [width-equations height-equations app-tree]
  (all-width-equations->tree width-equations
                             (all-height-equations->tree
                              height-equations app-tree)))

(defn update-layout! []
  (om/transact! (data/components)
                (fn [tree]
                  (let [height-equations (equations (:components tree) :height)
                        width-equations  (equations (:components tree) :width)
                        solved-height-equations (solve-linear-eqs height-equations)
                        solved-width-equations  (solve-linear-eqs width-equations)]
                    (all-equations->tree solved-width-equations
                                         solved-height-equations
                                         tree)))))


(defmulti resize-layout (fn [tx-data root-cursor]
                          (:tag tx-data)))

(defmethod resize-layout :default [_ _])

(defmethod resize-layout :window-resize [{:keys [old-value new-value new-state]} _]
  (update-layout!))
