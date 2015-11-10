(ns ^:figwheel-always exp-builder.data
    (:require [om.core :as om :include-macros true]))

(def state (atom {:components {:type :R
                               :width -800
                               :height -800
                               :display "flex"
                               :flexDirection "row"
                               :coef :const
                               :C [{:width 300
                                    :type :C
                                    :display "flex"
                                    :flexDirection "column"
                                    :coef :var
                                    :C [{:height 190
                                         :backgroundColor "blue"
                                         :coef :var
                                         :C []}
                                        {:height 210
                                         :backgroundColor "green"
                                         :coef :var
                                         :C []}]}
                                   {:type :C
                                    :display "flex"
                                    :flexDirection "column"
                                    :coef :var
                                    :C [{:type :R
                                         :display "flex"
                                         :flexDirection "row"
                                         :coef :const
                                         :C [{:width 200
                                              :type :C
                                              :coef :var
                                              :C [{:height 200
                                                   :backgroundColor "orange"
                                                   :coef :var
                                                   :C []}
                                                  {:height 200
                                                   :backgroundColor "pink"
                                                   :coef :var
                                                   :C []}]}
                                             {:width 400
                                              :type :C
                                              :display "flex"
                                              :flexDirection "column"
                                              :coef :var
                                              :C [{:height 150
                                                   :backgroundColor "red"
                                                   :coef :var
                                                   :C []}
                                                  {:height 250
                                                   :backgroundColor "grey"
                                                   :coef :var
                                                   :C []}]}]}
                                        {:type :R
                                         :display "flex"
                                         :flexDirection "row"
                                         :coef :const
                                         :C [{:width 350
                                              :type :C
                                              :display "flex"
                                              :flexDirection "column"
                                              :coef :var
                                              :C [{:height 200
                                                   :backgroundColor "orange"
                                                   :coef :var
                                                   :C []}
                                                  {:height 200
                                                   :backgroundColor "pink"
                                                   :coef :var
                                                   :C []}]}
                                             {:width 250
                                              :type :C
                                              :display "flex"
                                              :flexDirection "column"
                                              :coef :var
                                              :C [{:height 150
                                                   :backgroundColor "red"
                                                   :coef :var
                                                   :C []}
                                                  {:height 250
                                                   :backgroundColor "grey"
                                                   :coef :var
                                                   :C []}]}]}]}]}}))

(defn layout-partition [n x]
  {:pre (> n 1)}
  (into [] (map (fn [_] {x 1 :C []}) (range n))))

(defn row-partition [n]
  {:pre (> n 1)}
  (layout-partition n :width))


(defn components []
  (-> state
      (om/root-cursor)))

(defn root-children []
  (-> state
      (om/root-cursor)
      :components))
