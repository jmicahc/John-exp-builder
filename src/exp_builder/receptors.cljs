(ns exp-builder.receptors
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :refer-macros [html]]
            [exp-builder.corpus-callosum :as cc]))


(defui MechanoLeft
  Object
  (render [this]
          (html
           [:div
            {:style
             {:z-index 20
              :width "20px"
              :left "-10px"
              :height "100%"
              :transition-property "height"
              :background-color "rgba(255,228,228,0.74)"
              :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}])))


(defui MechanoRight
  Object
  (render [this]
          (html
            [:div
             {:style
              {:z-index 20
               :width "20px"
               :height "100%"
               :right "-10px"
               :transition-property "height"
               :background-color "rgba(255,228,228,0.74)"
               :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}])))



(defui MechanoTop
  Object
  (render [this]
          (html
           [:div
            {:style
             {:z-index 20
              :width "100%"
              :position "absolute"
              :top "-10px"
              :height "20px"
              :transition-property "height"
              :background-color "rgba(255,228,228,0.74)"
              :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}])))


(defui MachanoBottom
  Object
  (render [this]
          [:div
           {:style
            {:z-index 20
             :width "100%"
             :position "absolute"
             :height "20px"
             :bottom "-10px"
             :transition-property "height"
             :background-color "rgba(255,228,228,0.74)"
             :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}]))