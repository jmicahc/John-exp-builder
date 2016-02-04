(ns ^:figwheel-always exp-builder.mutate
  (:require [exp-builder.data :as data]
            [exp-builder.resize :as resize]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn mutate [{:keys [state] :as env} key params]
  (cond
    (= 'window-resize key)
    {:value {:keys [:components]}
     :action #(swap! state (fn [state]
                             (update-in state
                                        [:root]
                                        resize/update-layout!)))}
    (= 'selection-resize key)
    {:value {:keys [:components]}
     :action #(print "hello world")}
    :else {:value :not-found}))
 
