import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <div className={styles.title}>UShort</div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
