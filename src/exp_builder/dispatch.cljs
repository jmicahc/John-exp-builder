(ns ^:figwheel-always exp-builder.dispatch)


#_(declare rx)


#_(defn inner
  [form index path outer]
  (let [new-path (conj path :children index)
        new-form (assoc form :path new-path)
        x (outer new-form)]
    (if (fn? x)
      (rx new-form outer new-path)
      x)))



#_(defn rx
  ([node outer] (rx (assoc node :root true) outer []))
  ([{:keys [children classes] :as form} outer path]
   (if (sequential? children)
     (let [x (outer form)]
       (if (fn? x)
         (x (mapv (fn [c i] (inner c i path outer)) children (range)))
         x))
     (outer form))))





#_(defn build-rx [{:keys [children] :as form} rxf]
  ((rxf form) (map #(build-rx % rxf) children)))
