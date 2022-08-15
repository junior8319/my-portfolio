import React from 'react';
import StacksForm from '../components/forms/StacksForm';
import NavBar from '../components/NavBar';
import Article from '../styled/Article';
import Container from '../styled/Container';
import { Title1 } from '../styled/Titles';

const Administrator = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Article>
          <Title1>Administrador</Title1>
          <StacksForm />
        </Article>
      </Container>
    </div>

  );
}

export default Administrator;
