(ns ^:figwheel-always exp-builder.components
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :refer-macros [html]]))

(declare layout-component)


(defui Layout  
  static om/IQuery
  (query [this]
         [:children :width :height
          :flexDirection :display
          :backgroundColor])
  
  Object
  (render [this]
          (let [{:keys [width height path
                        flexDirection display
                        backgroundColor
                        margin-top
                        margin-left
                        z-index]}
                (om/props this)]
            (html [:div
                   {:style
                    {:width width
                     :height height
                     :flexDirection flexDirection
                     :transition-property "all"
                     :transition-duration "0.3s"
                     :display display
                     :z-index (or z-index "auto")
                     :backgroundColor backgroundColor
                     :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 0.2)"}}
                   (om/children this)]))))



(defui TestNode
  Object
  (render [this]
          (html [:div {:id "test select node"}
                 (om/children this)])))



(defui LayoutSelect
  Object
  (render [this]
          (html [:div
                 {:id "hello world"
                  :style
                  {:box-shadow "0 2px 20px 0 rgba(0, 0, 0, 0.9)"
                   :transition-property "all"
                   :transition-duration "0.3s"
                   :z-index 10}} 
                 
                 [:div
                  {:style
                   {:z-index 10
                    :width "100%"
                    :height "30px"
                    :transition-property "width" 
                    :transition-duration "0.3s"
                    :background-color "rgba(255,228,228,0.74)"
                    :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}]

                 (om/children this)])))




(defui SelectRoot
  Object
  (render [this]
          (html
           [:div
            {:style
             {:z-index 20
              :position "absolute"
              :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}
            (om/children this)])))


(def layout-component (om/factory Layout))
(def layout-select (om/factory LayoutSelect))
(def layout-select-root (om/factory SelectRoot))
(def test-node (om/factory TestNode))
