// import signUpUser from '../0x01-ES6_promise/4-user-promise';
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    /*
    * await ensures we get a result from the promise before moving to the next line of code
    * It pauses the execution of the function until the promise is settled.
    * signUpUser takes in two parameters, firstName and lastName
    * uploadPhoto takes in one parameter, fileName
    * .catch is not used here because we are using async/await
    */
    const trial = await Promise.allSettled([signUpUser(firstName, lastName),
      uploadPhoto(fileName)]);
    const formattedResults = trial.map(({ status, value, reason }) => {
      if (status === 'fulfilled') {
        // Add additional properties for fulfilled promises
        return {
          status,
          value: {
            ...value, // ensures to copy all the properties of the value object
            firstName, // means firstName: firstName
            lastName, // means lastName: lastName
          },
        };
      }
      // Handle rejected promises
      return {
        status,
        value: `Error: ${reason.message}`,
      };
    });

    console.log(formattedResults);
    return formattedResults;
  } catch (error) {
    return error;
  }
}