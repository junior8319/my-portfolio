import styled from 'styled-components';

export const FormDiv100 = styled.div`
  border: none;
  padding: ${ props => props.padding || '5px' };
  margin: ${ props => props.margin };
  border-radius: 10px;
  width: 99%;
  background-color: transparent;
  color: #e1dbdb90;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  &:hover {
    background-color: #0000ff20;
    color: #e1dbdb;
  }
`;

export const FormDiv50 = styled.div`
  border: none;
  padding: 5px;
  border-radius: 10px;
  width: 45%;
  background-color: transparent;
  color: #e1dbdb90;
  
  &:hover {
    background-color: #0000ff20;
    color: #e1dbdb;
  }
`;

export const FormDiv30 = styled.div`
  border: none;
  padding: 5px;
  border-radius: 10px;
  width: 28%;
  background-color: transparent;
  color: #e1dbdb90;
  
  &:hover {
    background-color: #0000ff20;
    color: #e1dbdb;
  }

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    width: 45%;
  }
`;

export const FormDiv25 = styled.div`
  border: none;
  padding: 10px;
  border-radius: 10px;
  width: 22%;
  background-color: transparent;
  color: #e1dbdb90;
  
  &:hover {
    background-color: #0000ff20;
    color: #e1dbdb;
  }

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    width: 45%;
  }
`;

export const FormContainer = styled.form`
  border: none;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;