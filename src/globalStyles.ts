import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Exo 2', sans-serif; /* Sci-fi font */
    background: linear-gradient(120deg, #000 30%, #333 70%);
    color: #0f0;
    overflow-x: hidden;
    /* Hide default cursor if we are using a custom cursor */
    cursor: none;
  }
  a {
    color: #0f0;
    text-decoration: none;
  }
`;

export default GlobalStyle;
