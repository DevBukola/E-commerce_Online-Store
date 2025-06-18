import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./index.css";

export default function Modal({ children, show, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (show) {
      modal.showModal();
    }

    return () => modal.close();
  }, [show]);

  // useEffect(() => {
  //   const modal = dialog.current;

  //   if (show) {
  //     modal.showModal();
  //     document.body.style.overflow = "hidden";
  //   }

  //   return () => {
  //     modal.close();
  //     document.body.style.overflow = "";
  //   };
  // }, [show]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      <div className="modal-content">{children}</div>
    </dialog>,
    document.getElementById("modal")
  );
}
