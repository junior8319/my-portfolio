import styled from 'styled-components';

const Container = styled.section`
  background-color: ${props => props.backGround};
  width: 98%;
  position: relative;
  top: 55px;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;

  article:hover {
    background-color: #0000ff20;
    transition: 1s;
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default Container;