function getResponseFromAPI(){
 const url = `https://jsonplaceholder.typicode.com/todos/1`;
    return fetch(url)
    .then( response => {
         return response.json()
        })
        //  return response;
}