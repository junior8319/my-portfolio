import styled from 'styled-components';

const NormalPicture = styled.img`
  max-width: 175px;
  max-height: 250px;
  background: none;
  border-radius: 10px;
  position: relative;
  top: 0;
  right: 0;

  @media (max-width: 700px) {
    justify-self: center;
    text-align: center;
    align-self: center;
    margin: auto;
    width: 100%;
    height: auto;
  }
`;

export default NormalPicture;