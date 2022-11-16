import React from "react";
import menuItems, { MenuItem } from "./menuItems";
import { StyledLink } from "components/Link.styled";
import { NavStyled } from "./styles";

const Nav = () => {
  return (
    <NavStyled>
      {menuItems.map((item: MenuItem, index: number) => {
        return (
          <StyledLink href={item.url}>
            <a>{item.title}</a>
          </StyledLink>
        );
      })}
    </NavStyled>
  );
};
export default Nav;
