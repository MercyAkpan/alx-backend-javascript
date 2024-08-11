function getResponseFromAPI() {
  const result = Promise.resolve({ id: 1, title: 'Test Todo' });
  // result is a Promise object that is resolved, so it will always
  // return a successful promise, with the defined values above
  return result;
}
export default getResponseFromAPI;
// The below returns a promise as well, fetch is not allowed in the test
// function getResponseFromAPI(){
//     const url = `https://jsonplaceholder.typicode.com/todos/1`;
//     return fetch(url)
// }
