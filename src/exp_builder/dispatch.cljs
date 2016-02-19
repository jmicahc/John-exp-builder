(ns ^:figwheel-always exp-builder.dispatch
  (:require [exp-builder.components :as components]))

(declare rx)


(defn inner
  [form index path outer]
  (let [new-path (conj path :children index)
        new-form (assoc form :path new-path)
        x (outer new-form)]
    (if (fn? x)
      (rx new-form outer new-path)
      x)))



(defn rx
  ([node outer] (rx (assoc node :root true) outer []))
  ([{:keys [children classes] :as form} outer path]
   (if (sequential? children)
     (let [x (outer form)]
       (if (fn? x)
         (x (mapv (fn [c i] (inner c i path outer)) children (range)))
         x))
     (outer form))))


(defmulti class-rxf :class)


(defmethod class-rxf :selection [{:keys [children select-root] :as props}]
  (print "test")
  (if select-root
    (fn [c] (components/layout-select-root props c))
    (if children
      identity
      (fn [c] (components/layout-select props c)))))


(defn new-rxf [rxf classes]
  (fn [node]
    (fn [c]
      ((apply
        comp
        (cons (rxf node)
              (map
               #(class-rxf (assoc node
                                  :class %))
               classes)))
       c))))


(defn build-rx
  [{:keys [children classes] :as form} rxf]
  (let [rxf (if classes (new-rxf rxf classes) rxf)]
    ((rxf form) (mapv #(build-rx % rxf) children))))
