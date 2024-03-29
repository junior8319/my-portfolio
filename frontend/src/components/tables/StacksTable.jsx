import { useContext } from 'react';
import StacksContext from '../../context/StacksContext';
import { deleteStackRequest, getStacks } from '../../helpers/stacksApi';
import {
  Col,
  ColBtnDiv,
  ColDeleteBtn,
  ColUpdateBtn,
  HeadCol,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead
} from '../../styled/Table';
import Link from '../../styled/Link';

const StacksTable = () => {
  const { mappedStacks, setIsUpdating, setStack, setStacks } = useContext(StacksContext);

  const selectToUpdate = (tableStack) => {
    setIsUpdating(true);

    setStack({
      id: tableStack.id,
      title: tableStack.title,
      description: tableStack.description,
      stackUrl: tableStack.stackUrl,
      stackDocsUrl: tableStack.stackDocsUrl,
      imageUrl: tableStack.imageUrl,
    });
  };

  if (!mappedStacks || mappedStacks.length === 0) return <h3>Sem ferramentas cadastradas</h3>
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <Row>
            <HeadCol>ID</HeadCol>
            <HeadCol>Título</HeadCol>
            <HeadCol>URL</HeadCol>
            <HeadCol>Documentação</HeadCol>
            <HeadCol>Inclusão</HeadCol>
            <HeadCol>Última Atualização</HeadCol>
            <HeadCol>Ações</HeadCol>
          </Row>
        </TableHead>
        <TableBody>
          {
            mappedStacks.map((tableStack) => {
              const {
                id,
                title,
                stackUrl,
                stackDocsUrl,
              } = tableStack;

              let { createdAt, updatedAt } = tableStack;
              createdAt = new Date(createdAt).toLocaleDateString('pt-BR');
              updatedAt = new Date(updatedAt).toLocaleDateString('pt-BR');

              
                return (
                  <Row key={ `${id}#$%${title}` }>
                    <Col data-label='ID: '>{id}</Col>

                    <Col data-label='Título: '>{title}</Col>

                    <Col data-label='Página: '>
                      <Link
                        href={stackUrl}
                        color={ '#488AFA' }
                        target={'_blank'}
                      >
                        {stackUrl}
                      </Link>
                    </Col>

                    <Col data-label='Documentação: '>
                      <Link
                        href={stackDocsUrl}
                        color={ '#488AFA' }
                        target={'_blank'}
                      >
                        {stackDocsUrl}
                      </Link>
                    </Col>

                    <Col>{createdAt}</Col>

                    <Col>{updatedAt}</Col>

                    <Col data-label='Ações: '>
                      <ColBtnDiv>
                        <ColUpdateBtn
                          onClick={() => selectToUpdate(tableStack)}
                        >
                          Alterar
                        </ColUpdateBtn>
                      {/* </ColBtnDiv> */}
                      {/* <ColBtnDiv> */}
                        <ColDeleteBtn
                          onClick={
                            () => deleteStackRequest(tableStack.id)
                            .then(() => {
                              getStacks().then(response => setStacks(response));
                            })
                          }
                        >
                          Excluir
                        </ColDeleteBtn>
                      </ColBtnDiv>
                    </Col>

                  </Row>
                );
            })
          }          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StacksTable;