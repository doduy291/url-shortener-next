import Image from "next/image";
import styles from "./home.module.scss";
import Box from "./Box";
import backgroundImg from "../../../public/background.svg";

const Home = () => {
  return (
    <main className={styles.main}>
      <Image
        src={backgroundImg}
        alt="backgroundImg"
        quality={100}
        layout="fill"
        objectFit="cover"
        style={{
          zIndex: -1,
        }}
        loading="eager"
      />
      <div className={styles.introduction}>
        <div className={styles.title}>Create Short Links!</div>
        <div className={styles.description}>
          <p>
            Capsulink is a custom short link personalization tool that enables
            you to target, engage and drive more customers. Get started for
            free.
          </p>
        </div>
      </div>
      <Box />
    </main>
  );
};

export default Home;
