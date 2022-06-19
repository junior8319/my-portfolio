import styled from 'styled-components';

const Container = styled.section`
  width: 98%;
  position: relative;
  top: 55px;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default Container;