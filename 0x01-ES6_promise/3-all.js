// import non-default functions from utils.js
import { uploadPhoto, createUser } from './utils';
export default function handleProfileSignup(){
    try {
        // Do the below to try the catch block
        // throw new Error('The fake API is not working currently');
      return Promise.all([uploadPhoto(), createUser()])
        .then((values) => {
          console.log(values[0].body, values[1].firstName, values[1].lastName);
          const result = `${values[0].body} ${values[1].firstName} ${values[1].lastName}`;
          console.log (result);
        })
    } catch (error) {
      console.log('Signup system offline');
    }
}
// Now you can use uploadPhoto and createUser in this file
