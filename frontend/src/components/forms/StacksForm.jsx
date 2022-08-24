import React, { useState, useContext } from 'react';
import StacksContext from '../../context/StacksContext';
import { requestStackRegister } from '../../helpers/stacksApi';

const StacksForm = () => {
  const { stacks, setStacks } = useContext(StacksContext);
  const [stack, setStack] = useState({
    title: '',
    description: '',
    stackDocsUrl: '',
    imageUrl: '',
    stackUrl: '',
  });

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
      <input
        type="textarea" id="description-input"
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

      <input
        type="button"
        value="Salvar"
        onClick={ () => {
          requestStackRegister(stack)
            .then((data) => setStacks([...stacks, data]));
        }}
      />
    </form>
  );
}

export default StacksForm;