(ns ^:figwheel-always exp-builder.root
    (:require
     [om.core :as om :include-macros true]
     [nom.ui :as ui]
     
     [exp-builder.data :as data]
     [exp-builder.layout :as layout]
     [com.rpl.specter :as sp]
     [cljs.core.async :as async :refer [<! >!]]))


(defn window-resize-handler [event]
  (let [w (.-innerWidth js/window)
        h (.-innerHeight js/window)]
    (om/transact! (data/components)
                  [:components]
                  (fn [components]
                    (merge components {:w (- w) :h (- h)}))
                  :window-resize)))

(defn add-window-resize-listener [root-owner]
  (.addEventListener js/window "resize" window-resize-handler))

(ui/defcomponent root-component [app owner]
  (will-mount [_]
              (add-window-resize-listener owner))
  (render-state [_ state]
                (om/build layout/build-layout-components (:components app)
                          {:react-key "root-component"
                           :state (:components app)})))
