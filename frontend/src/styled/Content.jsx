import styled from 'styled-components';

const Content = styled.article`
  overflow: auto;
  width: 98%;
  height: 87%;
  padding: 5px;
  background-color: #ffffff15;
  border-radius: 10px;
  margin: 0;

  @media (max-width: 400px) {
    align-self: center;
    margin: auto;
    justify-self: center;
  }
`;

export default Content;
