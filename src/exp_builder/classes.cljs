(ns ^:figwheel-always exp-builder.classes
  (:require [exp-builder.components :as components]))


;; Deprecated


#_(defmulti class-rxf :class)


#_(defmethod class-rxf :resize [{:keys [width height] :as node}]
  (if width
    (fn [& c] (print "width") (apply components/resize-width node c))
    (if height
      (fn [& c] (print "height") (apply components/resize-height node c))
      identity)))



#_(defmethod class-rxf :selection [{:keys [children] :as node}]
  (if (not (empty? children))
    identity
    (fn [& c] (print "hi") (apply components/layout-select node c))))


#_(defn build-classes [{:keys [classes] :as node}]
  (if (empty? classes) classes
      ((class-rxf (assoc node :class (:class (first classes))))
       (build-classes (update node :classes next))
       (build-classes (first classes)))))



