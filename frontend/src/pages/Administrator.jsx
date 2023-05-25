import React from 'react';
import StacksForm from '../components/forms/StacksForm';
import NavBar from '../components/NavBar';
import StacksTable from '../components/tables/StacksTable';
// import StacksProvider from '../context/StacksProvider';
import Article from '../styled/Article';
import Container from '../styled/Container';
import { Title1, Title2 } from '../styled/Titles';
import { useContext } from 'react';
import StacksContext from '../context/StacksContext';

const Administrator = () => {
  const { isUpdating } = useContext(StacksContext);
  return (
    // <StacksProvider>
    <>
      <NavBar />
      <Container>
        <Article>
          <Title1>Administrador</Title1>
          { !isUpdating && <StacksForm /> }
          <StacksTable />
        </Article>
      </Container>
    </>
    // </StacksProvider>

  );
}

export default Administrator;
