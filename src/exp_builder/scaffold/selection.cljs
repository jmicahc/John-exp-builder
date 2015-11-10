(ns exp-builder.scaffold.selection
  (:require [exp-builder.resize :as resize]
            [nom.ui :as ui]))

#_(ui/defcomponent draggable [state component])


#_(ui/defcomponent selectable [state component]
  (render [_]
          [:div {:style {:left (resize/abs-position path :w)
                         :top (resize/abs-position path :h)
                         :width (:w state)
                         :height (:h state)}}]))
