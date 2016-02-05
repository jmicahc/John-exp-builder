(ns ^:figwheel-always exp-builder.components
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [goog.dom :as gdom]
            [sablono.core :refer-macros [html]]
            [exp-builder.style :as style]
            [exp-builder.resize :as resize]
            [exp-builder.selection :as selection]
            [exp-builder.data :as data]))

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
                        backgroundColor]}
                (om/props this)]
            (html [:div
                   {:style
                    {:width width
                     :height height
                     :flexDirection flexDirection
                     :transition-property "all"
                     :transition-duration "0.5s"
                     :display display
                     :backgroundColor backgroundColor
                     :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 0.3)"}}
                   (om/children this)]))))

(defui LayoutSelect
  Object
  (render [this]
          (let [width (resize/tree-recurse
                       (om/props this)
                       resize/tree->width)
                height (resize/tree-recurse
                        (om/props this)
                        resize/tree->height)
                path (:path (om/props this))]
            (html [:div
                   {:id "hello world"
                    :style
                    {:box-shadow "0 2px 20px 0 rgba(0, 0, 0, 0.9)"
                     :transition-property "all"
                     :transition-duration "0.2"
                     :z-index 12}} 

                   [:div
                    {:style
                     {:position "fixed"
                      :z-index 10
                      :width (resize/tree-recurse
                              (om/props this)
                              resize/tree->width)
                      :height "30px"
                      :transition-property "width" 
                      :transition-duration "0.5s"
                      :background-color "rgba(255,228,228,0.74)"
                      :box-shadow "0 2px 15px 0 rgba(0, 0, 0, 1.0)"}}]
                   
                   [:div
                    {:style
                     {:position "fixed"
                      :z-index 13
                      :margin-left (- width 30)
                      :width "30px"
                      :height "30px"
                      :background "url(img/resize.svg)"
                      :backgroundRepeat "no-repeat" 
                      :backgroundPosition "top right"}
                     :onDrag (fn [e]
                               (.-preventDefault e)
                               (print (.-clientY e))
                               #_(print (resize/tree-recurse
                                         (:root @data/state)
                                         (partial resize/tree->top path)))
                               (om/transact! this '[(selection-resize)]))}]
                   
                   (om/children this)]))))

(def layout-component (om/factory Layout))
(def layout-select (om/factory LayoutSelect))
