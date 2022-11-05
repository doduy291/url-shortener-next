import Image from "next/image";
import styles from "./home.module.scss";
import Box from "./Box";
import backgroundImg from "../../../public/background.svg";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.imgWrapper}>
        <Image
          src={backgroundImg}
          alt="backgroundImg"
          quality={100}
          layout="fill"
          objectFit="cover"
          loading="eager"
          style={{ zIndex: "-1", opacity: "0.5" }}
        />
      </div>
      <div className={styles.introduction}>
        <div className={styles.title}>Create Short Links!</div>
        <div className={styles.description}>
          <p>
            UShort is a url shortener tool that enables you to reduce long URLs
            into memorable URLs and simplify copy. Get started for free.
          </p>
        </div>
      </div>
      <Box />
    </main>
  );
};

export default Home;
