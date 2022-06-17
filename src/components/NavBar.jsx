import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavBar from '../styled/NavBar';

const NavBar = () => {
  return (
    <StyledNavBar>
        <h1>NavBar</h1>
        <Link to="/">Home</Link>
        <Link to="/contact-me">Contato</Link>
        <Link to="/articles">Artigos</Link>
        <Link to="/projects">Projetos</Link>
    </StyledNavBar>
  );
}

export default NavBar;
