import styled from 'styled-components';

const StacksContainer = styled.section`
  width: 98%;
  height: 600px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  article:hover {
    background-color: #0000ff20;
    transition: 1s;
  }
`;

export default StacksContainer;