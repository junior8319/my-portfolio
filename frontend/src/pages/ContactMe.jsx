import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Container from '../styled/Container';
import { FormContainer, FormDiv100 } from '../styled/Form';
import { Label, Span } from '../styled/Labels';
import { Title1 } from '../styled/Titles';
import Article from '../styled/Article';
import { Input, TextArea } from '../styled/Inputs';
import { SaveButton } from '../styled/Buttons';
import { validateEmail, validateMessage, validateName, validatePhone } from '../services/validateForm';
import { SimpleP } from '../styled/Paragraphs';

const ContactMe = () => {
  const initialMsgObj = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [messageObj, setMessageObj] = useState(initialMsgObj);
  const [nameError, setNameError] = useState({error: '', required: true });
  const [emailError, setEmailError] = useState({error: '', required: true });
  const [phoneError, setPhoneError] = useState({error: '', required: false });
  const [messageError, setMsgError] = useState({error: '', required: true });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'phone') {
      setMessageObj({
        ...messageObj,
        phone: value.replace(/\D/g, ''),
      });
    } else {
      setMessageObj({
        ...messageObj,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    if (messageObj.name) {
      setNameError({ error: validateName(messageObj.name) });
    }

    if (messageObj.email) {
      setEmailError({ error: validateEmail(messageObj.email) });
    }

    if (messageObj.phone && messageObj.phone.length > 0) {
      setPhoneError({ error: validatePhone(messageObj.phone) });
    } else {
      setPhoneError({ error: '' });
    }

    if (messageObj.message) {
      setMsgError({ error: validateMessage(messageObj.message) });
    }
  }, [messageObj.email, messageObj.message, messageObj.name, messageObj.phone]);

  return (
    <Container>
      <NavBar />
      <Article>
        <Title1>Contato</Title1>
        
        <FormContainer>
          <FormDiv100
            padding={ '0 10px' }
            margin={ '0 3px' }
          >
            <Label htmlFor='name'>Nome:</Label>

            <Input
              id='name'
              name='name'
              placeholder='Seu nome aqui...'
              value={ messageObj.name }
              required
              onChange={(event) => {
                handleInputChange(event);
                setNameError({ error: validateName(messageObj.name) });
              }}
            />
            { nameError.required &&
              <Span>*</Span>
            }
          </FormDiv100>
          { nameError.error.length > 0 &&
            <FormDiv100
              padding={ '0 10px' }
              margin={ '0 3px' }
            >
              <SimpleP color={ '#f59a9a' }>{ nameError.error }</SimpleP>
            </FormDiv100>
          }

          <FormDiv100
            padding={ '0 10px' }
            margin={ '0 3px' }
          >
            <Label htmlFor='email'>E-mail:</Label>

            <Input
              id='email'
              name='email'
              placeholder='seuEndereço@dominio.com'
              value={ messageObj.email }
              required
              onChange={ (event) => {
                handleInputChange(event);
                setEmailError({ error: validateEmail(messageObj.email) });
              } }
            />
            { emailError.required &&
              <Span>*</Span>
            }
          </FormDiv100>
          { emailError.error.length > 0 &&
            <FormDiv100
              padding={ '0 10px' }
              margin={ '0 3px' }
            >
              <SimpleP
                color={ '#f59a9a' }
                padding={ '0' }
                width={ '90%' }
              >
                { emailError.error }
              </SimpleP>
            </FormDiv100>
          }

          <FormDiv100
            padding={ '0 10px' }
            margin={ '0 3px' }
          >
            <Label htmlFor='phone'>Telefone:</Label>

            <Input
              id='phone'
              name='phone'
              mask='(99) 99999-9999999'
              value={ messageObj.phone }
              onChange={ (event) => {
                handleInputChange(event);
                setPhoneError({ error: validatePhone(messageObj.phone) });
              } }
            />
            { phoneError.required &&
              <Span>*</Span>
            }
          </FormDiv100>
          { phoneError.error.length > 0 &&
            <FormDiv100
              padding={ '0 10px' }
              margin={ '0 3px' }
            >
              <SimpleP
                color={ '#f59a9a' }
                padding={ '0' }
                width={ '90%' }
              >
                { phoneError.error }
              </SimpleP>
            </FormDiv100>
          }

          <FormDiv100
            padding={ '0 10px' }
            margin={ '0 3px' }
          >
            <Label>Mensagem:</Label>
            <TextArea
              rows={ 10 }
              id='message'
              name='message'
              value={ messageObj.message }
              required
              onChange={ (event) => {
                handleInputChange(event);
                setMsgError({ error: validateMessage(messageObj.message) });
              } }
            />
            { messageError.required &&
              <Span>*</Span>
            }
          </FormDiv100>
          { messageError.error.length > 0 &&
            <FormDiv100
              padding={ '0 10px' }
              margin={ '0 3px' }
            >
              <SimpleP
                color={ '#f59a9a' }
                padding={ '0' }
                width={ '90%' }
              >
                { messageError.error }
              </SimpleP>
            </FormDiv100>
          }

          <FormDiv100
            padding={ '0 10px' }
            margin={ '0 3px' }
          >
            <SaveButton
              type='button'
              value={ 'Enviar' }
            />
          </FormDiv100>
        </FormContainer>
      </Article>
    </Container>
  );
};

export default ContactMe;
