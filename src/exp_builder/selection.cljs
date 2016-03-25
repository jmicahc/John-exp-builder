(ns exp-builder.selection
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  #_(:require [exp-builder.corpus :as corpus]
            [om.next :as om :refer-macros [defui]]
            [sablono.core :refer-macros [html]]
            [cljs.core.async :as async :refer [<! >! put! chan sub take!
                                               dropping-buffer]]
            [exp-builder.data :as data]
            [exp-builder.mutate :as mutate :refer [mutate-chan]]
            [cljs.core.match :as match]
            [exp-builder.components :as comps]))

(comment

  (def selection-chan (chan (dropping-buffer 10)))

  (defn selection-state-machine []
    (go-loop []
      (let [e (<! selection-chan)]
        (case [(:click e) (:ctrlKey e) (:shiftKey e)]
          [true false false]
          true

          [true true false]
          true

          [true false true]
          true

          [false false false]
          nil)
        (>! mutate-chan e)
        (recur)))))


