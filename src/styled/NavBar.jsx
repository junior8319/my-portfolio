import styled from 'styled-components';

const NavBar = styled.nav`
  border-bottom: 0.5px solid #e6e6e6;
  display: flex;
  margin: 10px 0;
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
`;

export default NavBar;
