// import functions from utils.js
import { uploadPhoto, createUser } from './utils';
export default function handleProfileSignup(){
    try {
        // throw new Error('The fake API is not working currently');
      return Promise.all([uploadPhoto(), createUser()])
        .then((values) => {
          console.log(values[0].body, values[1].firstName, values[1].lastName);
        })
    } catch (error) {
      console.log('Signup system offline');
    }
}
// Now you can use uploadPhoto and createUser in this file
