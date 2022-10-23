import type { NextPage } from "next";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Home from "../templates/Home";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Meta title="Url Shortener Next" description="Generated url shortner" />
      <Home />
    </Layout>
  );
};

export default HomePage;
