import Nav from "components/Nav";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
