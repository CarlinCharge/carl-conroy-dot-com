import styled from "styled-components";
import NextLink from "next/link";

export const StyledLink = styled(NextLink)`
  &:hover {
    color: #9fffcb;
    transition: 0.3s;
    opacity: 1;
    text-decoration: underline;
  }
  &:visited {
    color: #efefef;
  }
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 165%;
  text-decoration: none;
  text-align: center;
  color: #efefef;
`;
