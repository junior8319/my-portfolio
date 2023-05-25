import { useContext, useState } from 'react';
import StacksContext from '../../context/StacksContext';
import StacksForm from '../forms/StacksForm';
import { deleteStackRequest, getStacks, updateStackRequest } from '../../helpers/stacksApi';

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
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>URL</th>
            <th>Documentação</th>
            <th>Inclusão</th>
            <th>Última Atualização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
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

              return (
                <tr key={ `${id}#$%${title}` }>
                  { (!isUpdating || stackIdUpdating !== stack.id)
                    ?
                      (
                        <>
                          <td>{id}</td>
                          <td>{title}</td>
                          <td>{stackUrl}</td>
                          <td>{stackDocsUrl}</td>
                          <td>{createdAt}</td>
                          <td>{updatedAt}</td>
                          <td>
                            <button
                              onClick={() => selectToUpdate(stack)}
                            >
                              Alterar
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={
                                () => deleteStackRequest(stack.id)
                                .then(() => {
                                  getStacks().then(response => setStacks(response));
                                })
                              }
                            >
                              Excluir
                            </button>
                          </td>
                        </>
                      )
                    :
                      (
                        <>
                          <td>
                            <StacksForm />
                          </td>
                          <td>
                            <button
                              onClick={() => sendUpdateRequest(stackIdUpdating)}
                            >
                              Salvar
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => stopUpdating()}
                            >
                              Cancelar
                            </button>
                          </td>
                        </>
                      )

                  }
                </tr>
              )
            })
          }          
        </tbody>
      </table>
    </div>
  );
};

export default StacksTable;