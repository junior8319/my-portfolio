import styled from 'styled-components';

const NavBar = styled.nav`
  border-bottom: 0.5px solid #e6e6e6;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  a {
    text-decoration: none;
    height: 80%;
  };
  a: hover {
    text-decoration: none;
    color: #fff;
    transition: 1s;
  };
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export default NavBar;
