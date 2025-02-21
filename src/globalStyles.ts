import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif; /* Sci-fi font for main text */
    background: radial-gradient(closest-side at 50% 50%, #000 0%, #020202 100%);
    color: #0f0;
    overflow-x: hidden;
  }
  a {
    color: #0f0;
    text-decoration: none;
  }
`;

export default GlobalStyle;
