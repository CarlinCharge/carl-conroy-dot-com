import type { NextPage } from "next";
import Project from "components/Project";
import Layout from "components/Layout";
import { ButtonBlack, ButtonGreen } from "components/Button/Button.styled";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <ButtonGreen>View The Project</ButtonGreen>
      <ButtonBlack>See All Projects</ButtonBlack>
      <Project title="My New Project" />
    </Layout>
  );
};

export default Home;
