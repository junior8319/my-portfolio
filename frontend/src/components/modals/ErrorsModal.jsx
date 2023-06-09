import Container from "../../styled/Container";
import { FormDiv100 } from "../../styled/Form";
import { SimpleP } from "../../styled/Paragraphs";

const ErrorsModal = (props) => {
  const { errors } = props;

  if (errors && errors.length > 0) {
    return (
      <Container
        backGround={ '#e1dbdb' }
      >
        { errors.map(error => (
            <FormDiv100>
              <SimpleP>{ error.error }</SimpleP>
            </FormDiv100>
        )) }  
      </Container>
    );
  }
};

export default ErrorsModal;