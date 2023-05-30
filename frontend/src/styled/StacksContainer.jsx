import styled from 'styled-components';

const StacksContainer = styled.section`
  width: 98%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  article:hover {
    background-color: #0000ff20;
    transition: 1s;
  }

  @media (max-width: 700px) {
    /* flex-wrap: wrap; */
  }
`;

export default StacksContainer;