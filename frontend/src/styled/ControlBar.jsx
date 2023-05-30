import styled from 'styled-components';

const ControlBar = styled.nav`
  width: 98%;
  height: 10%;
  padding: 5px;
  background-color: #ffffff00;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0;

  @media (max-width: 400px) {
    align-self: center;
    margin: auto;
    justify-self: center;
  }
`;

export default ControlBar;
