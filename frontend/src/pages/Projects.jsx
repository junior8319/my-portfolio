import React from 'react';
import NavBar from '../components/NavBar';
import Container from '../styled/Container';
import { Title1 } from '../styled/Titles';
import ProjectsComponent from '../components/ProjectsComp';

const Projects = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Title1>Meus Projetos</Title1>
        <ProjectsComponent />
      </Container>
    </>
  );
};

export default Projects;
