(ns exp-builder.resize
  (:require [om.core :as om :include-macros :true]
            [exp-builder.data :as data]
            [com.rpl.specter :as sp :refer [compiled-select]]))

(defn calc-dim-helper [node dim orientation]
  (cond
    (and (= (:type node) orientation) (dim node))
    (cons  {:path (:path node) :coef (:coef node)  :num (dim node)}
           (mapcat #(list (calc-dim-helper % dim orientation)) (:C node)))

    (dim node)
    (cons {:path (:path node) :coef (:coef node) :num (dim node)}
          (mapcat #(calc-dim-helper % dim orientation) (:C node)))
    
    (= (:type node) orientation)
    (mapcat #(list (calc-dim-helper % dim orientation)) (:C node))

    :true
    (mapcat #(calc-dim-helper % dim orientation) (:C node))))

(defn widths-tree [tree]
  (calc-dim-helper tree :w :C))

(defn heights-tree [tree]
  (calc-dim-helper tree :h :R))

(defn root->leaf-paths [tree]
  "Takes a tree with map nodes that branches on 
   lists. Returns a list of lists, where each inner list
   cooresponds to a path in the tree from root to a leaf .

   NOTE, a single-branching tree is not handled properly. It's dimension
   dimension is off by one. In this case, a list of vectors is 
   returned (instead of a list containing a singleton list of vectors)."
  (let [[maps lists] (split-with map? (filter (comp not empty?) tree))]
    (cond
      (empty? lists) maps
      :else (map #(concat maps (root->leaf-paths %)) lists))))

(defn tree-width-equations [component-tree]
  "Takes component tree and returns a list of lists, where
   the first element of each inner list is the window width,
   and the rest is a path from left-to-right through layout
   components. Thus the structure overal represents the set
   of all paths from left-to-right through the layout 
   components.

   Each inner list should be thought of as a linear equation
   to be solved on resizing events."
  (root->leaf-paths (widths-tree component-tree)))

(defn tree-height-equations [component-tree]
  "Like tree-width-euqations, but for heights."
  (root->leaf-paths (heights-tree component-tree)))

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
                               (assoc-in m (conj (:path equation) :w)
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
                               (assoc-in m (conj (:path equation) :h)
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
                  (let [height-equations (tree-height-equations (:components tree))
                        width-equations (list (tree-width-equations (:components tree)))
                        solved-height-equations (solve-linear-eqs height-equations)
                        solved-width-equations (solve-linear-eqs width-equations)]
                    (all-equations->tree solved-width-equations
                                         solved-height-equations
                                         tree)))))


(defmulti resize-layout (fn [tx-data root-cursor]
                          (:tag tx-data)))

(defmethod resize-layout :default [_ _])

(defmethod resize-layout :window-resize [{:keys [old-value new-value new-state]} _]
  (update-layout!))
