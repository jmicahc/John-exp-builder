(ns ^:figwheel-always exp-builder.components
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [goog.dom :as gdom]
            [sablono.core :as html :refer-macros [html]]
            [exp-builder.style :as style]
            [cljs.core.match :refer-macros [match]]
            [exp-builder.data :as data]))

(declare layout-component)
(declare resizable-component)
(declare dispatch)

(defui Layout
  static om/IQuery
  (query [this]
         [:children :width :height :flexDirection :display :backgroundColor :coef])
  Object
  (render [this]
          (let [{:keys [children width height flexDirection backgroundColor display]} (om/props this)]
            (html [:div {:style {:max-width width :min-width width :display display
                                 :min-height height :max-height height :flexDirection flexDirection
                                 :backgroundColor backgroundColor}}
                   (if (empty? children) "hello"  (map dispatch children))]))))

(defui Resizable
  Object
  (render [this]
          (identity
           (html [:div {:style {:backgroundColor "red" :width "100px"
                                :height "100px" :margin "30px 30px"}}
                  "resizeable"]))))


(def layout-component (om/factory Layout))
(def resizable-component (om/factory Resizable))


(defn dispatch [component]
  (match (:type component)
         :layout (layout-component component)
         :resizable (resizable-component component)
         :else nil))
