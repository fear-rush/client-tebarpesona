import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&family=Roboto:wght@300;500&display=swap');
  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    /* overflow: hidden; */
  }

  ol, ul {
    list-style: none;
  }

`;

export default GlobalStyle;
