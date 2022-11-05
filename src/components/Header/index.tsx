import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <div className={styles.title}>UShort</div>
          </Link>
        </div>
        <div className={styles.right}>
          <Button title="Signin" type="text" />
          <Button title="Signup" type="common" />
        </div>
      </header>
    </>
  );
};

export default Header;
