import { Link } from 'react-router-dom';
import { NavBarMenu } from '../styled/Container';

const NavMenu = () => {
  return (
    <NavBarMenu>
      <Link to="/">Home</Link>
      <Link to="/contact-me">Contato</Link>
      <Link to="/articles">Artigos</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/administrator">Administrador</Link>
    </NavBarMenu>
  );
};

export default NavMenu;