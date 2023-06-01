import React, { useContext } from 'react';
import StacksContext from '../../context/StacksContext';
import { requestStackRegister } from '../../helpers/stacksApi';
import { SaveButton } from '../../styled/Buttons';
import { Input, TextArea } from '../../styled/Inputs';
import { Label } from '../../styled/Labels';
import { FormContainer, FormDiv100, FormDiv25 } from '../../styled/Form';

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
    <FormContainer action="POST">
      <FormDiv25>
        <Label htmlFor="input-title">
          Título:
        </Label>

        <Input
          id="input-title"
          name="title"
          type="text"
          value={stack.title}
          onChange={handleChange}
        />
      </FormDiv25>

      <FormDiv25>
        <Label htmlFor="docs-url">
          Página da documentação:
        </Label>

        <Input
          type="text"
          id="docs-url"
          value={stack.stackDocsUrl}
          name="stackDocsUrl"
          onChange={handleChange}
        />
      </FormDiv25>

      <FormDiv25>
        <Label htmlFor="image-url">
          URL da imagem:
        </Label>

        <Input
          type="text"
          id="image-url"
          value={stack.imageUrl}
          name="imageUrl"
          onChange={handleChange}
        />
      </FormDiv25>
        
      <FormDiv25>
        <Label htmlFor="stack-url">
          URL da habilidade:
        </Label>

        <Input
          type="text"
          id="stack-url"
          value={stack.stackUrl}
          name="stackUrl"
          onChange={handleChange}
        />
      </FormDiv25>

      <FormDiv100>
        <Label htmlFor="description-input">
          Descrição:
        </Label>

        <TextArea
          type="textarea" id="description-input"
          cols={ 30 }
          rows={ 3 }
          value={ stack.description }
          name="description"
          onChange={handleChange}
        />
      </FormDiv100>

      <FormDiv100>
        {
          !isUpdating && (
            <SaveButton
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
      </FormDiv100>
    </FormContainer>
  );
}

export default StacksForm;