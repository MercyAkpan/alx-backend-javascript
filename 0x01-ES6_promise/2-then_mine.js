// This returns a  resolved function, on success, and on failure --
// catches the error and converts it into a rejected promise
function handleResponseFromAPI(promise) {
  try {
    return promise({ status: 200, body: 'success' })
      .catch(() => Promise.reject(new Error()));
  }
  // throw new Error();
  catch (error) {
    return ('noting');
  } finally {
    console.log('Got a response from the API');
  }
}
export default handleResponseFromAPI;
