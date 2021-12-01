import React from "react";
import menuItems, { MenuItem } from "./menuItems";

const Nav = () => {
  return (
    <nav>
      {menuItems.map((item: MenuItem, index: number) => {
        return <div>{item.title}</div>;
      })}
    </nav>
  );
};
export default Nav;
