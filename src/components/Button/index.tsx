import clsx from "clsx";
import styles from "./button.module.scss";
import { ButtonProps } from "~/types/Button";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className={styles.wrapper} onClick={props.onClick}>
      <div
        className={clsx(styles.btn, styles[props.type || ""])}
        style={props.style}
      >
        {props.title}
      </div>
    </div>
  );
};

export default Button;
