(ns ^:figwheel-always exp-builder.layout
  (:require [om.core :as om :include-macros true]
            [nom.ui :as ui]

            [cljs-uuid-utils.core :as uuid]
            [exp-builder.data :as data]

            [cljs.core.async :as async :refer [<! >! alts! <! >! chan timeout]]))


(defn uuid-seq []
  (repeatedly uuid/make-random-uuid))

(defn layout-component->hiccup [state]
  [:div {:style {:display (cond
                            (= (:type state) :R) "flex"
                            (= (:type state) :C) "flex"
                            :else "inline")
                 :flex-direction (cond (= (:type state) :R) "row"
                                       (= (:type state) :C) "column"
                                       :else "none")
                 :width (or (:w state) "auto")
                 :height (or (:h state) "auto")
                 :background-color (or (:color state) "transparent")}}])

(ui/defcomponent build-layout-components [data owner]
  (render-state [_ state]
                (om/transact! data (fn [m] (assoc m :path (om/path data))))
                (conj (layout-component->hiccup state)
                      (map (fn [state cursor key]
                             (om/build build-layout-components cursor
                                       {:react-key key
                                        :state state}))
                           (:C state) (:C data) (uuid-seq)))))
