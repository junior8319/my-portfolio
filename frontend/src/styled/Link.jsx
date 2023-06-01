import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.color || "#853935"};
  text-decoration: none;
  background: none;

  &:hover {
    color: #b9d6f4;
  }
`;

export default Link;