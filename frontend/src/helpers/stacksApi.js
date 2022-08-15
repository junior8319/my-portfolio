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

const requestStackRegister = async (receivedData) => {
  try {
    const httpRequest = new XMLHttpRequest();
    if (httpRequest) {
      httpRequest.open(receivedData.method, API_URL + receivedData.url);
      httpRequest.setRequestHeader('Content-Type', 'application/json');
      httpRequest.setRequestHeader('Accept', 'application/json');
      httpRequest.setRequestHeader('Access-Control-Allow-Origin', receivedData.origin);
      httpRequest.onreadystatechange = () => console.log(httpRequest);
      httpRequest.send(JSON.stringify(receivedData.body));
    }
    
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
      httpRequest.onreadystatechange = () => console.log(httpRequest);
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
