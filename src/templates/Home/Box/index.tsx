import Image from "next/image";
import Button from "../../../components/Button";
import styles from "../home.module.scss";
import chainIcon from "../../../../public/icon/link-chain.svg";

const Box = () => {
  return (
    <div className={styles.box}>
      <div className={styles.inputWrapper}>
        <span className={styles.headInput}>
          <Image
            src={chainIcon}
            alt="icon"
            width={27}
            height={27}
            style={{ pointerEvents: "none" }}
          />
        </span>
        <input
          className={styles.input}
          placeholder="Paste a link to shorten it"
        />
        <div className={styles.btnInput}>
          <Button title="Shorten" type="gradient" />
        </div>
      </div>
    </div>
  );
};

export default Box;
