import React from "react";
import ReactDOM from "react-dom";
import { ChildrenProps } from "~/types/common";

const Modal: React.FC<ChildrenProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      <div className="modal__overlay"></div>
    </div>,
    document.querySelector("body") as HTMLBodyElement,
  );
};

export default Modal;
