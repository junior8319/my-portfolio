import NavBar from "./components/NavBar";
import Container from "./styled/Container";
import picture from './assets/images/my_photo.jpeg';
import { NormalPicture } from "./styled/Pictures";
import Welcome from "./components/Welcome";
import Stacks from "./components/Stacks";


function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <NormalPicture src={ picture } alt="" srcset="" />
        <Welcome />
        <Stacks />
        {/* Desenvolver uma seção (Container) habilidades(stacks) a ser preenchida na forma de cards com imagens, títulos
        e links para a minha página sobre a habilidade e para a página de documentação da stack assim como a própria página*/}
      </Container>
    </div>
  );
}

export default App;
