import Link from "../styled/Link";
import Navbar from "../styled/Navbar";

const NavBar = () => {
  return (
    <Navbar>
        <Link href="/">Home</Link>
        <Link href="/contact-me">Contato</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/articles">Artigos</Link>
    </Navbar>
  );
};

export default NavBar;
