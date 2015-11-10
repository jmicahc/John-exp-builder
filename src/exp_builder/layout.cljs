(ns ^:figwheel-always exp-builder.layout
  (:require [om.core :as om :include-macros true]
            [nom.ui :as ui]

            [cljs-uuid-utils.core :as uuid]
            [exp-builder.data :as data]
            [exp-builder.scaffold.selection :as selection]

            [cljs.core.async :as async :refer [<! >! alts! <! >! chan timeout]]))


(defn uuid-seq []
  (repeatedly uuid/make-random-uuid))

(declare build-components)

(ui/defcomponent layout-component [data owner]
  (render-state [_ state]
                (om/transact! data (fn [m] (assoc m :path (om/path data))))
                [:div {:style (dissoc data :C)}
                 (map build-components (:C data))]))


(defn build-selectable [data]
  (cond
    (:resizeable? data)
    (om/build layout-component data)))

(defn build-components [data]
  (let [key (take 1 (uuid-seq))]
    (om/build layout-component data {:react-key key :state data})))
