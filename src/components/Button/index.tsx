import styles from "./button.module.scss";

interface Props {
  title?: string;
  type: string;
  onClick?: () => void;
}

// enum typeEnum
const Button: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper} onClick={props.onClick}>
      <div className={styles[props.type]}>{props.title}</div>
    </div>
  );
};

export default Button;
