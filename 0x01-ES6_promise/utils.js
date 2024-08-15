export function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  }
////////////////////////
"To cause an async error, the function should return a rejected promise."
// export function uploadPhoto() {
//   // Simulate an asynchronous error
//   return Promise.reject(new Error('Failed to upload photo'));
// }
////////////////////////

  export function createUser() {
    return Promise.resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  }