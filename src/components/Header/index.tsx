import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <div className={styles.title}>USNext</div>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.button__text}>Sign In</div>
          <div className={styles.button}>Sign Up</div>
        </div>
      </header>
    </>
  );
};

export default Header;
