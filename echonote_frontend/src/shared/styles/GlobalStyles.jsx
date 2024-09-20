import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MyCustomFont';
    src: url('/src/assets/fonts/SUIT-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
  }

  * {
    font-family: 'MyCustomFont', sans-serif;
  }
`;

export default GlobalStyles;
