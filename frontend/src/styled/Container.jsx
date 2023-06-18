import styled from 'styled-components';

export const InnerContent = styled.div`
  background-color: ${props => props.backGround || 'transparent'};
  width: ${props => props.width || '95%'};
  margin: ${props => props.margin || '5px 0'};
  padding: ${props => props.padding || '0 10px'};
  justify-content: center;
`;

export const NavbarMenu = styled.div`
  background-color: #e1dbdb30;
`;

const Container = styled.section`
  background-color: ${props => props.backGround};
  width: 100%;
  position: relative;
  top: 55px;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;

  article:hover {
    background-color: #0000ff20;
    transition: 1s;
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export default Container;
