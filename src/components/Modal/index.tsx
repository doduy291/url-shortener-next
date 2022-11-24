import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "~/types/Modal";

const Modal: React.FC<ModalProps> = ({ children, onClose, clickRef }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container" ref={clickRef}>
        {children}

        <div className="modal__closeWrapper" onClick={onClose}>
          <svg
            className="modal__closeIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M6.414 5A1 1 0 1 0 5 6.414L10.586 12 5 17.586A1 1 0 1 0 6.414 19L12 13.414 17.586 19A1 1 0 1 0 19 17.586L13.414 12 19 6.414A1 1 0 1 0 17.586 5L12 10.586 6.414 5Z"></path>
          </svg>
        </div>
      </div>
      <div className="modal__overlay"></div>
    </div>,
    document.querySelector("body") as HTMLBodyElement,
  );
};

export default Modal;
