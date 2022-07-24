const API_URL = process.env.REACT_APP_BASE_URL;

const getStacks = async () => {
  try {
    const stacks = await fetch(`${API_URL}/stacks`);
    const stacksJson = await stacks.json();
    return stacksJson;
  } catch (error) {
    console.log(error);
    return new Error(`Something went wrong. Error: ${error}`);
  }
};

export default getStacks;
