import { useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import Article from '../styled/Article';
import { Title1, Title2, Title3 } from '../styled/Titles';
import { SimpleP } from '../styled/Paragraphs';
import { CardPicture } from '../styled/Pictures';

const Stacks = () => {
  const [stacks, setStacks] = useState([]);
  
  useEffect(() => {
    getStacks()
      .then(data => setStacks(data));
  }, []);

  useEffect(() => {}, [stacks]);

  return (
    <Article>
      <Title1>Ferramentas que conheço:</Title1>
      
      {
        (stacks && stacks.length > 0) &&
        stacks.map(stack => (
          <Article key={stack.id}>
            <Title2>{ stack.title }</Title2>
            <CardPicture src={ stack.imageUrl } alt={ stack.title } />
            
            <SimpleP>{ stack.description }</SimpleP>
            
            <Title3>Documentação:</Title3>
            <a href={ stack.stackDocsUrl } target="_blank" rel="noopener noreferrer">
              <SimpleP>{ stack.stackDocsUrl }</SimpleP>
            </a>
            
            <Title3>Página da Ferramenta:</Title3>
            <a href={ stack.stackUrl } target="_blank" rel="noopener noreferrer">
              <SimpleP>{ stack.stackUrl }</SimpleP>
            </a>
          </Article>
        ))
      }
    </Article>
  );
};

export default Stacks;
