import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-family: "Montserrat"
    
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #3B434A;
    color: #EFEFEF;
    height: 100vh;
    width:100vw;
    overflow-x: hidden;
    
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
