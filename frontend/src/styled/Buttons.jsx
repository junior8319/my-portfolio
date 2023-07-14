import styled from "styled-components";

export const ControlButton = styled.button`
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  width: 20%;
  background-color: #0000ff20;
  color: #b9d6f4;

  &:hover {
    background-color: #b9d6f4;
    color: #47425f;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
    padding: 5px;
    width: 70px;
  }

  @media (max-width: 400px) {
    width: 20%;
  }
`;

export const SaveButton = styled.input`
  border: none;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  background-color: #13890f;
  color: #e1dbdb;
  text-align: center;
  
  &:hover {
    background-color: #e1dbdb;
    color: #13890f;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
    width: 75px;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
    width: 60px;
  }
`;

export const CancelButton = styled.input`
  border: none;
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  background-color: #89250f60;
  color: #e1dbdb90;
  
  &:hover {
    background-color: #89250f;
    color: #e1dbdb;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
    width: 75px;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const NavMenuButton = styled.button`
  border: 0.5px solid #e1dbdb50;
  border-radius: 50px;
  padding: 10px;
  margin: 5px;
  position: ${props => props.position || ''};
  z-index: ${props => props.zIndex || ''};
  background-color: #47425f90;

  @media (min-width: 501px) {
    display: none;
  }
`;
