import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    background-color: #47425f;
    margin: 3px;
    font-family: 'Verdana', sans-serif;
    color: #b9d6f4;
    line-height: 1.5;
  };
  *:hover {
    color: #488AFA;
    transition: 1s;
  }
`;

export default GlobalStyle;
