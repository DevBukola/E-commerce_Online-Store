import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import './index.css'

export default function Modal({ children, show, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (show) {
      modal.showModal();
    }

    return () => modal.close();
  }, [show]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
