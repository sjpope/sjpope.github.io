import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Orbitron', sans-serif;
    background: radial-gradient(circle at 50% 50%, #1a1a1a, #000);
    color: #fff;
    overflow-x: hidden;
    cursor: none; /* We'll use a custom cursor */
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default GlobalStyle;
