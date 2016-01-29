(ns ^:figwheel-always exp-builder.components
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [goog.dom :as gdom]
            [sablono.core :refer-macros [html]]
            [exp-builder.style :as style]
            [exp-builder.selection :as selection]
            [exp-builder.data :as data]))

(declare layout-component)
(declare resizable-component)
(declare dispatch)

(defui Layout  
  static om/IQuery
  (query [this]
         [:children :width :height :flexDirection :display :backgroundColor])
  
  Object
  (render [this]
          (let [{:keys [width height flexDirection display backgroundColor]}
                (om/props this)]
            (html [:div {:style {:width width :height height :flexDirection flexDirection
                                 :display display :backgroundColor backgroundColor}}
                   (om/children this)]))))

(defui Selection
  static om/Ident
  (ident [this {:key [type]}]
         [:component/type type])

  static om/IQuery
  (query [this] [:width :height :left :top :backgroundColor :position])
  
  Object
  (render [this]
          (html [:div {:style (om/props this)}])))

(def layout-component (om/factory Layout))
(def selection-component (om/factory Selection))
