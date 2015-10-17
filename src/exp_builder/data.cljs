(ns ^:figwheel-always exp-builder.data
    (:require [om.core :as om :include-macros true]))

(def state (atom {:components {:type :R
                               :w -800
                               :h -800
                               :coef :const
                               :C [{:w 300
                                    :type :C
                                    :coef :var
                                    :C [{:h 200
                                         :color "blue"
                                         :coef :var
                                         :C []}
                                        {:h 200
                                         :color "green"
                                         :coef :var
                                         :C []}]}
                                   {:w 100
                                    :type :C
                                    :coef :var
                                    :C [{:h 200
                                         :color "yellow"
                                         :coef :var
                                         :C []}
                                        {:h 200
                                         :color "purple"
                                         :coef :var
                                         :C []}]}]}}))

(defn layout-partition [n x]
  {:pre (> n 1)}
  (into [] (map (fn [_] {x 1 :C []}) (range n))))

(defn row-partition [n]
  {:pre (> n 1)}
  (layout-partition n :w))


(defn components []
  (-> state
      (om/root-cursor)))
