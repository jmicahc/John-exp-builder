(ns ^:figwheel-always exp-builder.classes)


(defmulti render-class identity)

(defmethod render-class :selection
  [{:keys [children class-root] :as props}]
  (if class-root
    identity #_(fn [c] (components/layout-select props c))
    identity))


(defmethod render-class :default
  [node]
  identity)



(defn comp-classes [node classes outer]
  (print classes)
  (fn [node] (identity (outer node))))
