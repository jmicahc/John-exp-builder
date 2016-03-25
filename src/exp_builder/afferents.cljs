(ns exp-builder.afferents)


(def clipboard-afferents
  {:onCopy   identity
   :onCut    identity
   :onPaste  identity})



(def keyboard-afferents
  {:onKeyDown  identity
   :onKeyPress identity
   :onKeyUp    identity})



(def keyboard-signature
  {:altKey             identity
   :charCode           identity
   :ctrlKey            identity
   :getModifierState   identity
   :key                identity
   :keyCode            identity
   :locale             identity
   :metaKey            identity
   :repeat             identity
   :shiftKey           identity
   :which              identity})    


(def mouse-events
  {:onDrag         (fn [e] e)
   :onDragEnd      (fn [e] e)
   :onDragEnter    (fn [e] e)
   :onDragExit     (fn [e] e)
   :onDragLeave    (fn [e] e)
   :onDragOver     (fn [e] e)
   :onDragStart    (fn [e] e)
   :onDrop         (fn [e] e)
   :onMouseDown    (fn [e] e)
   :onMouseEnter   (fn [e] e)
   :onMouseLeave   (fn [e] e)
   :onMouseMove    (fn [e] e)
   :onMouseOut     (fn [e] e)
   :onMouseOver    (fn [e] e)
   :onMouseUp      (fn [e] e)
   }) 
