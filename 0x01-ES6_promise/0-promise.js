function getResponseFromAPI() {
    return Promise.resolve({ id: 1, title: "Test Todo" });
}

// function getResponseFromAPI(){
//     const url = `https://jsonplaceholder.typicode.com/todos/1`;
//     return fetch(url)
// }
export default getResponseFromAPI;
