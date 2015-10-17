(ns ^:figwheel-always exp-builder.core
    (:require [exp-builder.data :as data]
              [exp-builder.root :refer [root-component]]
              [exp-builder.resize :as resize]
              [om.core :as om :include-macros true]))

(enable-console-print!)

(om/root root-component
         data/state
         {:target (.getElementById js/window.document "app")
          :tx-listen resize/resize-layout})

(defn on-js-reload [])
