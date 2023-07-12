import styled from 'styled-components';

const Article = styled.article`
  width: ${ props => props.width || '70%' };
  margin: ${ props => props.margin || '10px' };
  padding: 10px;
  background-color: ${ props => props.backgroundColor || '#ffffff15' };
  border-radius: 10px;
  flex-grow: 1;
  display: ${props => props.display || ''};
  align-items: center;

  @media (max-width: 400px) {
    width: 95%;
    align-self: center;
    margin: auto;
    justify-self: center;
    padding: 2px;
  }
`;

export default Article;
