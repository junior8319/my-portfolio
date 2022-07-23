import { useEffect, useState } from 'react';
import getStacks from '../helpers/stacksApi';
import Article from '../styled/Article';
import { Title1 } from '../styled/Titles';

const Stacks = () => {
  const [stacks, setStacks] = useState([]);
  
  useEffect(() => {
    getStacks()
      .then(data => setStacks(data));
  }, []);

  useEffect(() => {}, [stacks]);

  console.log(stacks);

  return (
    <Article>
      <Title1>Ferramentas que conheço:</Title1>
    </Article>
  );
};

export default Stacks;
