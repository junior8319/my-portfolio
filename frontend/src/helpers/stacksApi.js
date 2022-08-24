const API_URL = process.env.REACT_APP_BASE_URL;
const API_ORIGIN = process.env.REACT_APP_BASE_URL_ORIGIN;

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

const requestStackRegister = (receivedData) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(receivedData),
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': API_ORIGIN,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
    const response = fetch(`${API_URL}/stacks`, options)
      .then(response => response.json())
      .then(data => {
        return data.stack;
      });
    return response;
  } catch (error) {
    console.log(error);
    return new Error(`Something went wrong. Error: ${error}`);
  }
};

const updateStackRequest = async (receivedData) => {
  try {
    const httpRequest = new XMLHttpRequest();
    if (httpRequest) {
      httpRequest.open(receivedData.method, API_URL + receivedData.url);
      httpRequest.setRequestHeader('Content-Type', 'application/json');
      httpRequest.setRequestHeader('Accept', 'application/json');
      httpRequest.setRequestHeader('Access-Control-Allow-Origin', receivedData.origin);
      httpRequest.send(JSON.stringify(receivedData.body));
    }
    
  } catch (error) {
    console.log(error);
    return new Error(`Something went wrong. Error: ${error}`);
  }
};


export {
  getStacks,
  requestStackRegister,
  updateStackRequest,
};
