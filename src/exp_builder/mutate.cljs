(ns ^:figwheel-always exp-builder.mutate
  (:require [exp-builder.data :as data]
            [exp-builder.resize :as resize]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'window-resize key)
    {:value {:keys [:components]}
     :action #(swap! state (partial resize/update-layout! @state))}
    {:value :not-found}))
