import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto Mono', monospace;
    background: #000;
    color: #0f0;
    overflow-x: hidden;
  }
  a {
    color: #0f0;
    text-decoration: none;
  }
`;

export default GlobalStyle;
