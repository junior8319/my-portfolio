import { useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import StacksContext from './StacksContext';

const StacksProvider = ({ children }) => {
  const [stacks, setStacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStacksFromApi = async () => {
    const data = await getStacks();
    setStacks(data);
    return data;
  };

  useEffect(() => {
    getStacksFromApi();
  }, []);

  useEffect(() => {
    setLoading(isLoading => !isLoading);
  }, [stacks]);
  let mappedStacks = stacks.map((stack) => stack);

  const contextValue = {
    stacks,
    mappedStacks,
    loading,
    setStacks,
    getStacksFromApi,
  }

  return (
    <StacksContext.Provider value={contextValue}>
      {children}
    </StacksContext.Provider>
  )
};

export default StacksProvider;