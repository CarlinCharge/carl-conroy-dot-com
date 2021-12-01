import type { NextPage } from "next";
import Project from "components/Project";
import Nav from "components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <h1>
        <Project title="My New Project" />
        Hello World!
      </h1>
    </div>
  );
};

export default Home;
