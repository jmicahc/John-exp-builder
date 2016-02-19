(ns ^:figwheel-always exp-builder.data
    (:require [om.next :as om]))


(def state (atom
            {:current-root []
             :root
             {:partition :column
              :type :root
              :class :layout
              :display "flex"
              :path []
              :flexDirection "row"
              :coef :const
              :children
              [{:partition :row
                :type :layout
                :class :layout
                :display "flex"
                :flexDirection "column"
                :coef :const
                :children
                [{:height 60
                  :coefficient 2
                  :class :layout
                  :display "flex"
                  :type :layout
                  :coef :const
                  :z-index 20
                  :backgroundColor "rgb(219, 212, 219)"
                  :children []}
                 {:partition :column
                  :type :layout
                  :class :layout
                  :display "flex"
                  :flexDirection "row"
                  :coef :const
                  :children
                  [{:width 15
                    :class :layout
                    :coefficient 2
                    :display "flex"
                    :type :layout
                    :coef :const
                    :backgroundColor "rgb(219, 212, 219)"
                    :children []}
                   {:width 300
                    :class :layout
                    :margin-left 10
                    :coefficient 30.0
                    :type :layout
                    :partition :row
                    :display "flex"
                    :flexDirection "column"
                    :coef :const
                    :children
                    [{:height 190
                      :class :layout
                      :coefficient 20.0
                      :margin-top 10
                      :type :layout
                      :backgroundColor "purple"
                      :coef :var}
                     {:height 210
                      :class :layout
                      :margin-top 10
                      :coefficient 21.0
                      :type :layout
                      :backgroundColor "green"
                      :coef :var}]}
                   {:partition :row
                    :class :layout
                    :type :layout
                    :display "flex"
                    :flexDirection "column"
                    :coef :var
                    :children
                    [{:partition :column
                      :class :layout
                      :type :layout
                      :display "flex"
                      :flexDirection "row"
                      :coef :var
                      :children
                      [{:width 200
                        :class :layout
                        :margin-left 10
                        :coefficient 20.0
                        :partition :row
                        :type :layout
                        :coef :var
                        :children
                        [{:height 200
                          :class :layout
                          :margin-top 10
                          :coefficient 20.0
                          :type :layout
                          :backgroundColor "purple"
                          :coef :var}
                         {:height 200
                          :class :layout
                          :margin-top 10
                          :coefficient 20.0
                          :type :layout
                          :backgroundColor "pink"
                          :coef :var}]}
                       {:type :layout
                        :classes [:selection]
                        :select-root true
                        :dipslay "flex"
                        :flexDirection "row"
                        :coef :var
                        :partition :row
                        :children
                        [{:width 400
                          :class :layout
                          :margin-left 10
                          :coefficient 40.0
                          :type :layout
                          :partition :row
                          :display "flex"
                          :flexDirection "column"
                          :coef :var
                          :children
                          [{:height 150
                            :class :layout
                            :margin-top 10
                            :coefficient 15.0
                            :type :layout
                            :backgroundColor "red"
                            :coef :var}
                           {:height 250
                            :class :layout
                            :margin-top 10
                            :coefficient 25.0
                            :type :layout
                            :backgroundColor "grey"
                            :coef :var}]}]}]}
                     {:partition :column
                      :class :layout
                      :type :layout
                      :display "flex"
                      :flexDirection "row"
                      :coef :var
                      :children
                      [{:width 350
                        :class :layout
                        :margin-left 10
                        :coefficient 35.0
                        :type :layout
                        :partition :row
                        :display "flex"
                        :flexDirection "column"
                        :coef :var
                        :children
                        [{:height 200
                          :class :layout
                          :margin-top 10
                          :coefficient 20.0
                          :type :layout
                          :backgroundColor "orange"
                          :coef :var}
                         {:height 200
                          :class :layout
                          :margin-top 10
                          :coefficient 20.0
                          :type :layout
                          :backgroundColor "pink"
                          :coef :var}]}
                       {:width 250
                        :class :layout
                        :margin-left 10
                        :coefficient 25.0
                        :type :layout
                        :partition :row
                        :display "flex"
                        :flexDirection "column"
                        :coef :var
                        :children
                        [{:height 150
                          :class :layout
                          :margin-top 10
                          :coefficient 10.0
                          :type :layout
                          :backgroundColor "red"
                          :coef :var}
                         {:height 250
                          :class :layout
                          :margin-top 10
                          :coefficient 10.0
                          :type :layout
                          :backgroundColor "grey"
                          :coef :var}
                         {:height 250
                          :class :layout
                          :margin-top 10
                          :coefficient 10.0
                          :type :layout
                          :backgroundColor "grey"
                          :coef :var}
                         {:height 250
                          :class :layout
                          :margin-top 10
                          :coefficient 10.0
                          :type :layout
                          :backgroundColor "grey"
                          :coef :var}]}]}]}
                   {:width 15
                    :class :layout
                    :coefficient 2
                    :display "flex"
                    :type :layout
                    :coef :const
                    :backgroundColor "rgb(219, 212, 219);"
                    :children []}]}
                 {:height 15
                  :class :layout
                  :coefficient 2
                  :display "flex"
                  :type :layout
                  :coef :const
                  :backgroundColor "rgb(219, 212, 219);"
                  :children []}]}]}}))
