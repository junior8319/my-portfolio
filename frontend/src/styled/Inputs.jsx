import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Input = styled(InputMask)`
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

  @media (max-width: 1100px) {
    font-size: 0.85rem;
  }
`;

export const TextArea = styled.textarea`
  border: 0.5px solid #e1dbdb;
  font-size: 1rem;
  padding: 5px;
  border-radius: 10px;
  width: 93%;
  background-color: #0000ff20;
  color: #e1dbdb90;
  margin-left: 5px;
  
  &:hover {
    background-color: #47425f;
    color: #e1dbdb;
  }

  @media (max-width: 1100px) {
    font-size: 0.85rem;
  }
`;
