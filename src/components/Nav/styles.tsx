import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
