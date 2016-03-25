(ns ^:figwheel-always exp-builder.mutate
  #_(:require [exp-builder.data :as data]
            [om.next :as om]
            [exp-builder.resize :as resize]
            [cljs.core.async :as async :refer [chan dropping-buffer put!]])
  #_(:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(comment
  ;; ===================================
  ;; Mutate

  (defmulti mutate om/dispatch)


  (defmethod mutate 'window-resize
    [{:keys [state] :as env} key params]
    (when true
      {:value {:keys [:root]}
       :action #(swap! state
                       (fn [state]
                         (update state
                                 :root
                                 (partial resize/display-subtree! []))))}))


  (defmethod mutate :default
    [{:keys [state] :as env} key params]
    {:value :not-found})

  ;; ========================================
  ;; Reconciler

  (defn app-root
    "Return the application's root component."
    [reconciler]
    {:pre [(om/reconciler? reconciler)]}
    (get @(:state reconciler) :root))


  (defn read [{:keys [state] :as env} key params]
    (let [st @state]
      (if-let [value (key st)]
        {:value value}
        {:value :not-found})))


  (def reconciler
    (om/reconciler
     {:state data/app-state
      :parser (om/parser {:read read :mutate mutate})}))


  (def mutate-chan (chan (dropping-buffer 5)))


  (go-loop []
    (let [m (<! mutate-chan)]
      (om/transact! (app-root reconciler) (:expr m))
      (recur)))


  ;; Fix later
  (defn window-resize-handler [event]
    (om/transact! (app-root reconciler) '[(window-resize)]))


  (.addEventListener js/window "resize" window-resize-handler)
  (window-resize-handler nil))
