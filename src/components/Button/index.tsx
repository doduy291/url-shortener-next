import styles from "./button.module.scss";

interface Props {
  title?: string;
  type: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[props.type]}>{props.title}</div>
    </div>
  );
};

export default Button;
