import { useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import StacksContext from './StacksContext';

const StacksProvider = ({ children }) => {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    getStacks()
      .then(data => setStacks(data));
  }, []);

  useEffect(() => {}, [stacks]);

  console.log(stacks);

  const contextValue = {
    stacks,
    setStacks
  }

  return (
    <StacksContext.Provider value={contextValue}>
      {children}
    </StacksContext.Provider>
  )
};

export default StacksProvider;