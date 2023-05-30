import { useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import Article from '../styled/Article';
import { Title1 } from '../styled/Titles';
import Carousel from './Carousel';

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
      <Carousel cards={ stacks } intervalTime={ 15000 } />
    </Article>
  );
};

export default Stacks;
