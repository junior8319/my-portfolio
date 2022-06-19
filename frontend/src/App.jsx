import NavBar from "./components/NavBar";
import Container from "./styled/Container";
import picture from './assets/images/rsz_eu-de-mamae-to-forte-2.jpg';
import NormalPicture from "./styled/Pictures";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Welcome />
        <NormalPicture src={ picture } alt="" srcset="" />
        {/* Desenvolver uma seção (Container) habilidades(stacks) a ser preenchida na forma de cards com imagens, títulos
        e links para a minha página sobre a habilidade e para a página de documentação da stack assim como a própria página*/}
      </Container>
    </div>
  );
}

export default App;
