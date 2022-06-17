import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";
import Articles from "../pages/Articles";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";

const Main = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/contact-me" element={ <ContactMe /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/articles" element={ <Articles /> } />
          <Route path="*" element={ <div>404</div> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
