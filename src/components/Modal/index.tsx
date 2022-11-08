import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import { ChildrenProps } from "~/types/common";

const Modal: React.FC<ChildrenProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className={styles.container}>{children}</div>
      <div className={styles.overlay}></div>
    </div>,
    document.querySelector("body") as HTMLBodyElement,
  );
};

export default Modal;
