import React from 'react';
import StacksForm from '../components/forms/StacksForm';
import NavBar from '../components/NavBar';
import StacksTable from '../components/tables/StacksTable';
import Article from '../styled/Article';
import Container from '../styled/Container';
import { Title1 } from '../styled/Titles';

const Administrator = () => {
  return (
    <>
      <NavBar />
      <Container>
          <Title1>Administrador</Title1>
        <Article
          maxHeight="fit-content"
          margin="5px auto"
          width="95%"
          padding="7.5px 0"
          >
          <StacksForm />
        </Article>
          
        <Article
          width="95%"
          margin="5px auto"
          padding="7.5px"
        >
          <StacksTable />
        </Article>
      </Container>
    </>
  );
}

export default Administrator;
