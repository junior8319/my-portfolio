import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavBar from '../styled/NavBar';
import { NavMenuButton } from '../styled/Buttons';

const NavBar = () => {
  return (
    <div>
      <NavMenuButton>Menu</NavMenuButton>
      <StyledNavBar>
          <Link to="/">Home</Link>
          <Link to="/contact-me">Contato</Link>
          <Link to="/articles">Artigos</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/administrator">Administrador</Link>
      </StyledNavBar>
    </div>
  );
}

export default NavBar;
