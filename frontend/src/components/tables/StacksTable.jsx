import { useContext, useState } from 'react';
import StacksContext from '../../context/StacksContext';
import StacksForm from '../forms/StacksForm';
import { deleteStackRequest, getStacks, updateStackRequest } from '../../helpers/stacksApi';
import { CancelButton, SaveButton } from '../../styled/Buttons';
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
  const { mappedStacks, stack, isUpdating, setIsUpdating, setStack, setStacks } = useContext(StacksContext);
  const [stackIdUpdating, setStackIdUpdating] = useState(null);

  const selectToUpdate = (stack) => {
    setStackIdUpdating(stack.id);
    setIsUpdating(true);

    setStack({
      id: stack.id,
      title: stack.title,
      description: stack.description,
      stackUrl: stack.stackUrl,
      stackDocsUrl: stack.stackDocsUrl,
    });
  };

  const stopUpdating = () => {
    setStackIdUpdating(null);
    setIsUpdating(false);
    
    setStack({
      id: '',
      title: '',
      description: '',
      stackUrl: '',
      stackDocsUrl: '',
    });
  };

  const sendUpdateRequest = async (receivedId) => {
    updateStackRequest(receivedId, stack)
    .then(() => {
      getStacks()
      .then(response => setStacks(response));
    });
    stopUpdating();
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
            mappedStacks.map((stack) => {
              const {
                id,
                title,
                stackUrl,
                stackDocsUrl,
              } = stack;

              let { createdAt, updatedAt } = stack;
              createdAt = new Date(createdAt).toLocaleDateString('pt-BR');
              updatedAt = new Date(updatedAt).toLocaleDateString('pt-BR');

              if (!isUpdating || stackIdUpdating !== stack.id) {
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
                          onClick={() => selectToUpdate(stack)}
                        >
                          Alterar
                        </ColUpdateBtn>
                      {/* </ColBtnDiv> */}
                      {/* <ColBtnDiv> */}
                        <ColDeleteBtn
                          onClick={
                            () => deleteStackRequest(stack.id)
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
              } else {
                return (
                  <Row key={ `${id}#$%${title}` }>
                    <Col colSpan={7}>
                      <StacksForm />
                      <SaveButton
                        type='button'
                        value='Salvar'
                        onClick={() => sendUpdateRequest(stackIdUpdating)}
                      />
                      <CancelButton
                        type='button'
                        value='Cancelar'
                        onClick={() => stopUpdating()}
                      />
                    </Col>
                  </Row>
                );
              }
            })
          }          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StacksTable;