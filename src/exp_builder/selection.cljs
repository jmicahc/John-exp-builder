(ns exp-builder.selection)

(defrecord Selection [elements selected last-clicked])
(defrecord Click [element modifiers])

(def shift ::shift)
(def control ::control)
(def alt ::alt)

(defn make-click [element modifiers]
  {:pre [element (every? #{shift control alt} modifiers)]}
  (map->Click {:element element
               :modifiers (set modifiers)}))

(defn event->click [element e]
  (make-click element
              (->> [(when e.shiftKey shift)
                    (when e.ctrlKey  control)]
                   (when e.altKey alt)
                   (remove nil?)
                   (into #{}))))

(defn make-selection [elements]
  (->Selection elements #{} nil))


(defn ^:private toggle-selection [selection element]
  (let [selected (:selected selection)]
    (update selection :selected
            (comp set (if (contains? selected element) disj conj))
            element)))

(defn ^:private range-selection [selection element]
  (let [{:keys [selected elements]} selection
        first-element (some (conj selected element) elements)
        last-element  (some (conj selected element) (reverse elements))
        new-selected (->> elements
                          (drop-while #(not= first-element %))
                          (take-while #(not=  last-element %))
                          (into #{first-element last-element}))]
    (update selection :selected into new-selected)))

(defn click [selection click]
  {:pre [(contains? (set (:elements selection)) (:element click))]}
  (let [{:keys [element modifiers]} click]
    (cond
      (and (empty? modifiers)
           (nil? element))
      (assoc selection
             :selected #{}
             :last-clicked nil)

      (empty? modifiers)
      (assoc selection
             :selected (if (= (:selected selection) #{element})
                         #{}
                         #{element})
             :last-clicked element)

      (control modifiers)
      (-> selection
          (toggle-selection element)
          (assoc :last-clicked element))

      (shift modifiers)
      (-> selection
          (range-selection element)
          (assoc :last-clicked element)))))

