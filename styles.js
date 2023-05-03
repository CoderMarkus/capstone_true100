import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: icon;
    background: black;
    color: ghostwhite;
    background-image: url('https://i.postimg.cc/Vk9vstn3/1419.webp');
    background-size: contain;    
  }
`;
