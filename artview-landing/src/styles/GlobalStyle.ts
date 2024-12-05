import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color:#f5f5f5;
  }
`;

export default GlobalStyle;
