import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #292929;
    color: #FFCD3F;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
  }
  button: {
    cursor: pointer;
  }
`;
