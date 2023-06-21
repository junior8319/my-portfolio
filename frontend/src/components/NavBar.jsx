import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavBar from '../styled/NavBar';
import { NavMenuButton } from '../styled/Buttons';
import { useState } from 'react';
import NavMenu from './NavMenu';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuBtnClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {
        showMenu
        ?
        <>
          <NavMenuButton
            onClick={ handleMenuBtnClick }
          >
            Fechar
          </NavMenuButton>
          <NavMenu />
        </>
        :
        <>
          <NavMenuButton
            onClick={handleMenuBtnClick}
          >
            Menu
          </NavMenuButton>
          <StyledNavBar>
            <Link to="/">Home</Link>
            <Link to="/contact-me">Contato</Link>
            <Link to="/articles">Artigos</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/administrator">Administrador</Link>
          </StyledNavBar>
        </>
      }
    </div>
  );
}

export default NavBar;
