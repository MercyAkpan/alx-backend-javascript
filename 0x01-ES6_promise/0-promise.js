function getResponseFromAPI(){
    // console.log("in here ");    
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    return fetch(url)
}
export default getResponseFromAPI;
//     .then( response => {
//         console.log(response.ok);
//         console.log("in here ");
//         response.json()
//         })
//         //  return response;
// }
// // getResponseFromAPI();