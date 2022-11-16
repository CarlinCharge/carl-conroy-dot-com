import Nav from "components/Nav";
import { ReactNode } from "react";
import { Global } from "./styles";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Global>
      <Nav />
      {children}
    </Global>
  );
};

export default Layout;
