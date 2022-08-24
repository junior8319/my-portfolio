import { useContext } from 'react';
import StacksContext from '../../context/StacksContext';

const StacksTable = () => {
  const { mappedStacks } = useContext(StacksContext);

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
            {mappedStacks.map((stack) => {
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
                  <td>{ id }</td>
                  <td>{title}</td>
                  <td>{stackUrl}</td>
                  <td>{stackDocsUrl}</td>
                  <td>{createdAt}</td>
                  <td>{updatedAt}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StacksTable;