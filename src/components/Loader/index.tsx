import { Loader } from "~/types/Loader";
import styles from "./loader.module.scss";

const Loader: React.FC<Loader> = ({ style }) => {
  return (
    <div className={styles.container}>
      <span className={styles.main} style={style}></span>
    </div>
  );
};

export default Loader;
