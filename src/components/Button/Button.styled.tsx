import styled from "styled-components";

export interface IButtonProps {
  variant: "primary | secondary";
}

export const ButtonGreen = styled.button`
  background-color: #66ad70;
  border-radius: 8.27px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Montserrat";
`;

export const ButtonBlack = styled(ButtonGreen)`
  background-color: #3b434a;
  color: white;
`;
