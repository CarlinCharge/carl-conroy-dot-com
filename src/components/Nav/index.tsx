import React from "react";
import menuItems, { MenuItem } from "./menuItems";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {menuItems.map((item: MenuItem, index: number) => {
        return (
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
