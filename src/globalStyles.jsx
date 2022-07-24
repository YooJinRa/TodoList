import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: #01174b;
    --sub-color: #2c4494;
    --pinkpoint-color: #b909dc;
    --bluepoint-color: #315ab1;
    --line-color: #315ab1;
    --text-color: #f7ffff;
    --main-shadow: 1px 1px 8px 1px #01174b;
    --main-radius: 20px;
  }
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-shadow: 1px 1px 2px var(--main-color);
    line-height: 1.1;
    color:var(--text-color);
    padding: 0;
    margin: 0; 
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul li, ol li {
    list-style:none;
  }
  body {
    background-color: var(--main-color);
  }
`;

export default GlobalStyles;