import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Aladin&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
   
  body{
    --title-font: "Aladin", cursive;
    --default-font: 'Montserrat', sans-serif;
    --main-font: arial;
    --main-color: #071540;
    --white-color: #E5E5E5;
    --light-green: #84d981;
    --bright-green : #2CBF6C;
    --middle-green: #41BF78;
    --orange : #f6ca56;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: var(--white-color);
  font-family: var(--default-font);
  color: var(--main-color);
  }
`;
export default GlobalStyle;
