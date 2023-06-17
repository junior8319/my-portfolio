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
  
  &:hover {
    background-color: #e1dbdb;
    color: #13890f;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
    width: 75px;
  }
`;

export const CancelButton = styled.input`
  border: none;
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
`;
