import Header from "../Header";
import styles from "./layout.module.scss";
import { ChildrenProps } from "~/types/common";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
