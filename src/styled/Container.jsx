import styled from 'styled-components';

const Container = styled.section`
  width: 98%;
  position: relative;
  top: 60px;
  border-radius: 10px;
  display: flex;
  margin: 10px auto;

  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

export default Container;