import type { NextPage } from "next";
import Project from "components/Project";
import Layout from "components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <Project title="My New Project" />
    </Layout>
  );
};

export default Home;
