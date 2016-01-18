(ns ^:figwheel-always exp-builder.core
    (:require [exp-builder.data :as data]
              [exp-builder.mutate :as mutate]
              [exp-builder.components :as components]
              [sablono.core :refer-macros [html]]
              [goog.dom :as gdom]
              [om.dom :as dom]
              [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [value (key st)]
      {:value value}
      {:value :not-found})))

(def reconciler
  (om/reconciler {:state data/state
                  :parser (om/parser {:read read :mutate mutate/mutate})}))

(declare render-app)

(defui Root
  static om/Ident
  (ident [this {:keys [type]}]
         [:component/type type])

  static om/IQuery
  (query [this]
         '[:children :width :height :flexDirection :display :backgroundColor :coef])

  Object
  (render [this]
          (html [:div {:style (om/props this)}
                 (map render-app (:children (om/props this)))])))

(defn render-app [{:keys [type children] :as props}]
  (case type
    :layout (components/layout-component props (map render-app children))
    :selection-root (components/selection-component props)))

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))

(defn app-root
  "Return the application's root component."
  [reconciler]
  {:pre [(om/reconciler? reconciler)]}
  (get @(:state reconciler) :root))

;; Fix later
(defn window-resize-handler [event]
  (om/transact! (app-root reconciler) '[(window-resize)]))

(.addEventListener js/window "resize" window-resize-handler)
(window-resize-handler nil)
 
(defn on-js-reload [])
