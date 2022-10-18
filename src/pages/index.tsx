import type { NextPage } from "next";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <Meta title="Url Shortener Next" description="Generated url shortner" />
      <main className={styles.main}>TEST</main>
    </Layout>
  );
};

export default Home;
