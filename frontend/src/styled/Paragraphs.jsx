import styled from 'styled-components';

export const SimpleP = styled.p`
  font-size: 0.8rem;
  background: none;
  width: 65%;
  padding: 10px 0;

  @media (max-width: 400px) {
    font-size: 0.6rem;
    margin: auto;
    width: 100%;    
  }
`;