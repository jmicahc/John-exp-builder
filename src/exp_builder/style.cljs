(ns ^:figwheel-always exp-builder.style
  (:require [clojure.set :as set]))


(def style-props #{:width :min-width :max-width :height :flexDirection :display :backgroundColor})

(def html-attrs #{})

(defn get-style [props]
  (when (-> props not empty)
    (reduce (fn [m [k v]] (if (contains? style-props k) (assoc m k v) m)) {} props)))
