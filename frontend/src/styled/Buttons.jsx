import styled from "styled-components";

export const ControlButton = styled.button`
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  background-color: #0000ff20;
  color: #b9d6f4;

  &:hover {
    background-color: #b9d6f4;
    color: #47425f;
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

  &:disabled {
    background-color: #13890f30;
    color: #e1dbdb30;
  }
  
  &:hover {
    background-color: #e1dbdb;
    color: #13890f;
    
    &:disabled {
      background-color: #e1dbdb20;
      color: #13890f60;
    }
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
`;
