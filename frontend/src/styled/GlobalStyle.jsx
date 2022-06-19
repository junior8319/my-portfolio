import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    background-color: #625B85;
    margin: 0;
    font-family: 'Verdana', sans-serif;
    color: #11203B;
  };
  *: hover {
    color: #488AFA;
    transition: 1s;
  }
`;

export default GlobalStyle;
