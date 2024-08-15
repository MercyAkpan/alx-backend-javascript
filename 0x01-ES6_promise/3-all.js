// import non-default functions from utils.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    // Do the below to try the catch block
    // throw new Error('The fake API is not working currently');
    // Funtion on success to return a Promise.all() promise.
    return Promise.all([uploadPhoto(), createUser()])
      .then((values) => {
        const result = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
        console.log(result);
      })
      // The .catch doesn't take any error object, simply logs out a message
      // If an async error, .catch handles it and it doenst throw an error 
      // to the catch block
      .catch(() => { console.log('Promise.catch block encountered'); });
  }// If a sync error, it throws an error to the catch block 
  catch (error) {
    console.log('Signup system offline');
    return null;
  }
}
