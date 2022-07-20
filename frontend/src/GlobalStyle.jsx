import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Aladin&display=swap');
  
  :root {
    --tittle-font: "Aladin", cursive;
    --main-font: arial;
    --main-color: #071540;
    --white-color: #E5E5E5;
    --light-green: #84d981;
    --bright-green : #2CBF6C;
    --middle-green: #41BF78;
  
  }
  body {
    width: 100vw;
    background-color: var(--white-color);
    font-family: var(--main-font);
  }
`;
export default GlobalStyle;
