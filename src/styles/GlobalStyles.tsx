import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  button{
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
  }
  body{
    font-family: "Ubuntu", sans-serif;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: "Antonio", sans-serif;
  }

`

export default GlobalStyles