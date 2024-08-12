// This returns a  resolved function, on success, and on failure --
// catches the error and converts it into a rejected promise
function handleResponseFromAPI(promise) {
  try {
    if (promise) {
      return Promise.resolve({ status: 200, body: 'success' });
    }
    throw new Error('');
  } catch (error) {
    return Promise.reject(error);
  } finally {
    console.log('Got a response from the API');
  }
}
export default handleResponseFromAPI;
