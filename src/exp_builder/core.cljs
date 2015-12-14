(ns ^:figwheel-always exp-builder.core
    (:require [exp-builder.data :as data]
              [exp-builder.mutate :as mutate]
              [exp-builder.components :as components]
              [goog.dom :as gdom]
              [om.dom :as dom]
              [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(def reconciler
  (om/reconciler {:state data/state
                  :parser (om/parser {:read read :mutate mutate/mutate})}))

(om/add-root! reconciler
              components/Layout (gdom/getElement "app"))

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


