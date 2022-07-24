import React from 'react';

const StacksForm = () => {
  return (
    <form action="POST">
      <label htmlFor="description-input">
        Descrição:
      </label>
      <input type="textarea" id="description-input" />
      
      <label htmlFor="docs-url">
        Página da documentação:
      </label>
      <input type="text" id="docs-url" />

      <label htmlFor="image-url">
        URL da imagem:
      </label>
      <input type="text" id="image-url" />

      <label htmlFor="stack-url">
        URL da habilidade:
      </label>
      <input type="text" id="stack-url" />

      <input type="button" value="Salvar" />
    </form>
  );
}

export default StacksForm;