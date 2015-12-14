(ns ^:figwheel-always exp-builder.data
    (:require [om.next :as om]))


(def state (atom   {:partition :column
                    :type :layout
                    :width -800
                    :height -800
                    :display "flex"
                    :flexDirection "row"
                    :coef :const
                    :children [{:width 300
                                :type :layout
                                :partition :row
                                :display "flex"
                                :flexDirection "column"
                                :coef :const
                                :children [{:height 190
                                            :type :layout
                                            :backgroundColor "blue"
                                            :coef :const
                                            :children [{:type :resizable}]}
                                           {:height 210
                                            :type :layout
                                            :backgroundColor "green"
                                            :coef :var
                                            :children []}]}
                               {:partition :row
                                :display "flex"
                                :type :layout
                                :flexDirection "column"
                                :coef :var
                                :children [{:partition :column
                                            :type :layout
                                            :display "flex"
                                            :flexDirection "row"
                                            :coef :const
                                            :children [{:width 200
                                                        :type :layout
                                                        :partition :row
                                                        :coef :var
                                                        :children [{:height 200
                                                                    :type :layout
                                                                    :backgroundColor "orange"
                                                                    :coef :var
                                                                    :children []}
                                                                   {:height 200
                                                                    :type :layout
                                                                    :backgroundColor "pink"
                                                                    :coef :var
                                                                    :children []}]}
                                                       {:width 400
                                                        :partition :row
                                                        :type :layout
                                                        :display "flex"
                                                        :flexDirection "column"
                                                        :coef :var
                                                        :children [{:height 150
                                                                    :type :layout
                                                                    :backgroundColor "red"
                                                                    :coef :var
                                                                    :children []}
                                                                   {:height 250
                                                                    :type :layout
                                                                    :backgroundColor "grey"
                                                                    :coef :var
                                                                    :children []}]}]}
                                           {:partition :column
                                            :display "flex"
                                            :type :layout
                                            :flexDirection "row"
                                            :coef :const
                                            :children [{:width 350
                                                        :type :layout
                                                        :partition :row
                                                        :display "flex"
                                                        :flexDirection "column"
                                                        :coef :var
                                                        :children [{:height 200
                                                                    :type :layout
                                                                    :backgroundColor "orange"
                                                                    :coef :var
                                                                    :children []}
                                                                   {:height 200
                                                                    :type :layout
                                                                    :backgroundColor "pink"
                                                                    :coef :var
                                                                    :children []}]}
                                                       {:width 250
                                                        :type :layout
                                                        :partition :row
                                                        :display "flex"
                                                        :flexDirection "column"
                                                        :coef :var
                                                        :children [{:height 150
                                                                    :type :layout
                                                                    :backgroundColor "red"
                                                                    :coef :var
                                                                    :children []}
                                                                   {:height 250
                                                                    :type :layout
                                                                    :backgroundColor "grey"
                                                                    :coef :var
                                                                    :children []}]}]}]}]}))
