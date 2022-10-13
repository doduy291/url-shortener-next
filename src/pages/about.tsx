import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <meta name="description" content="About content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>About Page</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          recusandae nihil aspernatur quas quasi dolorum voluptatibus. Sapiente
          facere aut amet. Vero perferendis neque quisquam itaque, harum
          accusamus veniam earum saepe?
        </p>
      </main>
    </div>
  );
};

export default About;
