import styled from 'styled-components';

const Article = styled.article`
  width: 70%;
  margin: 10px;
  padding: 10px;
  background-color: #ffffff15;
  border-radius: 10px;
  flex-grow: 1;

  @media (max-width: 400px) {
    width: 95%;
    align-self: center;
    margin: auto;
    justify-self: center;
    padding: 2px;
  }
`;

export default Article;
