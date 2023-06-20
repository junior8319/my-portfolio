import styled from 'styled-components';

export const InnerContent = styled.div`
  background-color: ${props => props.backGround || 'transparent'};
  width: ${props => props.width || '95%'};
  margin: ${props => props.margin || '5px 0'};
  padding: ${props => props.padding || '0 10px'};
  justify-content: center;
`;

export const NavBarMenu = styled.div`
  padding: 50px;
  background-color: #e1dbdb75;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  transition: 2s ease-in-out;

  a {
    background-color: transparent;
  }
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
