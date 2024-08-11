//This returns a  resolved function, on success, and on failure -- 
//catches the error and converts it into a rejected promise 
function getFullResponseFromAPI(success) {
  try {
    if (success) {
      return Promise.resolve({ status: 200, body: 'Success' });
    }
    throw new Error('The fake API is not working currently');
  } catch (error) {
    return Promise.reject(error);
  }
}
export default getFullResponseFromAPI;
