(ns ^:figwheel-always exp-builder.core
    (:require [exp-builder.data :as data]
              [exp-builder.mutate :as mutate]
              [exp-builder.resize :as resize]
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

(defn dispatch [{:keys [children type path] :as props}]
  (if children
    (case type
      :layout (partial components/layout-component props)
      :selection (partial components/layout-select props)
      (partial components/layout-component props))
    (components/layout-component props)))



(defui Root
  static om/Ident
  (ident [this {:keys [type]}]
         [:component/type type])

  static om/IQuery
  (query [this]
         '[:root])

  Object
  (render [this]
          (let [{:keys [root]} (om/props this)]
            (html [:div {:id "t"}
                   (resize/tree-recurse root dispatch)]))))

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
