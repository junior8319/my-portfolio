import React, { useContext } from 'react';
import StacksContext from '../../context/StacksContext';
import { requestStackRegister } from '../../helpers/stacksApi';

const StacksForm = () => {
  const {
    stacks,
    stack,
    isUpdating,
    setStacks,
    setStack,
  } = useContext(StacksContext);
  const initialStack = ({
    title: '',
    description: '',
    stackDocsUrl: '',
    imageUrl: '',
    stackUrl: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setStack({ ...stack, [name]: value });
  };

  return (
    <form action="POST">
      <label htmlFor="input-title">
        Título:
      </label>
      <input
        id="input-title"
        name="title"
        type="text"
        value={stack.title}
        onChange={handleChange}
      />

      <label htmlFor="description-input">
        Descrição:
      </label>
      <textarea
        type="textarea" id="description-input"
        cols={ 30 }
        rows={ 3 }
        value={ stack.description }
        name="description"
        onChange={handleChange}
      />
      
      <label htmlFor="docs-url">
        Página da documentação:
      </label>
      <input
        type="text"
        id="docs-url"
        value={stack.stackDocsUrl}
        name="stackDocsUrl"
        onChange={handleChange}
      />

      <label htmlFor="image-url">
        URL da imagem:
      </label>
      <input
        type="text"
        id="image-url"
        value={stack.imageUrl}
        name="imageUrl"
        onChange={handleChange}
      />

      <label htmlFor="stack-url">
        URL da habilidade:
      </label>
      <input
        type="text"
        id="stack-url"
        value={stack.stackUrl}
        name="stackUrl"
        onChange={handleChange}
      />
      {
        !isUpdating && (
          <input
            type="button"
            value="Salvar"
            onClick={ () => {
              requestStackRegister(stack)
                .then((data) => {
                  setStacks([...stacks, data])
                  setStack(initialStack);
              });
            }}
          />
        )
      }
    </form>
  );
}

export default StacksForm;