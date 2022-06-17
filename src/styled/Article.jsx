import styled from 'styled-components';

const Article = styled.article`
  width: 70%;
  padding: 20px 10px;
  background-color: #ffffff15;
  border-radius: 10px;
  flex-grow: 1;

  @media (max-width: 400px) {
    align-self: center;
    margin: auto;
    justify-self: center;
  }
`;

export default Article;
