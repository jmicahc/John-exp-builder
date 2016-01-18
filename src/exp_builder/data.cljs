(ns ^:figwheel-always exp-builder.data
    (:require [om.next :as om]))


(def state (atom
            {:partition :column
             :type :root
             :display "flex"
             :flexDirection "row"
             :coef :const
             :children
             [{:width 300
               :type :layout
               :partition :row
               :display "flex"
               :flexDirection "column"
               :coef :const
               :children
              [{:height 190
                 :type :layout
                 :backgroundColor "blue"
                 :coef :var}
                {:height 210
                 :type :layout
                 :backgroundColor "green"
                 :coef :var}]}
              {:partition :row
               :type :layout
               :display "flex"
               :flexDirection "column"
               :coef :var
               :children
               [{:partition :column
                 :type :layout
                 :display "flex"
                 :flexDirection "row"
                 :coef :const
                 :children
                 [{:width 200
                   :partition :row
                   :type :layout
                   :coef :var
                   :children
                   [{:height 200
                     :type :layout
                     :backgroundColor "black"
                     :coef :var}
                    {:height 200
                     :type :layout
                     :backgroundColor "pink"
                     :coef :var}]}
                  {:width 400
                   :type :layout
                   :partition :row
                   :display "flex"
                   :flexDirection "column"
                   :coef :var
                   :children
                   [{:height 150
                     :type :layout
                     :backgroundColor "red"
                     :coef :var}
                    {:height 250
                     :type :layout
                     :backgroundColor "grey"
                     :coef :var}]}]}
                {:partition :column
                 :type :layout
                 :display "flex"
                 :flexDirection "row"
                 :coef :const
                 :children
                 [{:width 350
                   :type :layout
                   :partition :row
                   :display "flex"
                   :flexDirection "column"
                   :coef :var
                   :children
                   [{:height 200
                     :type :layout
                     :backgroundColor "orange"
                     :coef :var}
                    {:height 200
                     :type :layout
                     :backgroundColor "pink"
                     :coef :var}]}
                  {:width 250
                   :type :layout
                   :partition :row
                   :display "flex"
                   :flexDirection "column"
                   :coef :var
                   :children
                   [{:height 150
                     :type :layout
                     :backgroundColor "red"
                     :coef :var}
                    {:height 250
                     :type :layout
                     :backgroundColor "grey"
                     :coef :var}]}]}]}]}))
