(ns ^:figwheel-always exp-builder.data
    (:require [om.next :as om]))


#_(def state (atom
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
                        :classes [{:class :selection
                                   :type :layout
                                   :height "30px"
                                   :classes [{:class :resize}]}]
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
                        :select-root true
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

 
(def simple-state1
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
      :class :layout
      :type :layout
      :display "flex"
      :flexDirection "column"
      :coef :var
      :children
      [{:height 350
        :class :layout
        :margin-left 10
        :coefficient 35.0
        :type :layout
        :partition :column
        :display "flex"
        :backgroundColor "red"
        :flexDirection "row"
        :coef :var
        :children
        [{:width 200
          :classes [{:class :selection}]
          :class :layout
          :margin-top 10
          :coefficient 20.0
          :type :layout
          :backgroundColor "pink"
          :coef :var}]}]}]}})


(defrecord Layout-node
    [partition
     type
     coef
     width
     height
     children
     backgroundColor
     coefficient])



(def simple-state
  {:selection {:children [{:top 10 :left 5 :bottom 5}]}
   :test "hello"
   :layout/node
   {:partition :column
    :type :root
    :uuid 0
    :events {:type :or
             :mutes [{:mutate true
                      :expr '[(window-resize)]}]
             :children
             [{:type :and
               :children
               [{:type :event
                 :key :b
                 :uuid 1}
                {:type :then
                 :children [{:type :event
                             :key :c
                             :uuid 2}
                            {:type :event
                             :key :d
                             :uuid 3}]}]}
              {:type :event
               :key :a
               :uuid 0}]}
    :children
    [{:width 350
      :uuid 1
      :coefficient 35.0
      :type :layout
      :partition :row
      :children [{:type :layout
                  :uuid 2
                  :height 80
                  :coefficient 8
                  :coef :const
                  :partition :column
                  :backgroundColor "gray"}
                 {:type :layout
                  :uuid 3
                  :height 70
                  :coefficient 7
                  :coef :var
                  :partition :column
                  :backgroundColor "orange"}]
      :backgroundColor "blue"
      :coef :var}
     {:width 350
      :uuid 4
      :partition :row
      :coefficient 35.0
      :type :layout
      :children [{:type :layout
                  :uuid 5
                  :height 80
                  :coefficient 8
                  :coef :const
                  :partition :column
                  :backgroundColor "gray"}
                 {:type :layout
                  :uuid 6
                  :height 70
                  :coefficient 7
                  :coef :var
                  :partition :column
                  :backgroundColor "black"}]
      :coef :var}
     {:width 350
      :coefficient 35.0
      :uuid 7
      :partition :row
      :children []
      :type :layout
      :backgroundColor "grey"
      :coef :var}]}})



(def simplest-possible-state
  {:selection {:type :selection-root
               :width 0
               :top   0
               :left  0
               :right 0
               :children []}
   :uuid 10
   :layout/node
   {:partition :column
    :type :root
    :events {:type :or
             :mutes [{:mutate true
                      :expr '[(window-resize)]}]
             :children
             [{:type :and
               :children
               [{:type :event
                 :key :b
                 :uuid 1}
                {:type :then
                 :children [{:type :event
                             :key :c
                             :uuid 2}
                            {:type :event
                             :key :d
                             :uuid 3}]}]}
              {:type :event
               :key :a
               :uuid 0}]}
    :uuid 0
    :coef :var
    :width 200
    :height 200
    :coefficient 20
    :backgroundColor "grey"
    :children []}})

(def app-state simple-state)
