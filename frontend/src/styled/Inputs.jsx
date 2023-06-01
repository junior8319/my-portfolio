import styled from 'styled-components';

export const Input = styled.input`
  border: 0.5px solid #e1dbdb;
  font-size: 1rem;
  padding: 5px 15px;
  border-radius: 10px;
  width: 90%;
  background-color: #0000ff20;
  color: #e1dbdb90;
  margin-left: 5px;
  
  &:hover {
    background-color: #47425f;
    color: #e1dbdb;
  }
`;

export const TextArea = styled.textarea`
  border: 0.5px solid #e1dbdb;
  font-size: 1rem;
  padding: 5px;
  border-radius: 10px;
  width: 95%;
  background-color: #0000ff20;
  color: #e1dbdb90;
  margin-left: 5px;
  
  &:hover {
    background-color: #47425f;
    color: #e1dbdb;
  }
`;
