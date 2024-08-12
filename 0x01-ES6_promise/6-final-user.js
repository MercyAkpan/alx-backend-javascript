// import signUpUser from '../0x01-ES6_promise/4-user-promise';
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const trial = await Promise.allSettled([signUpUser(firstName, lastName),
      uploadPhoto(fileName)]);
    // console.log(trial);
    // console.log`in here`;
    const formattedResults = trial.map(({ status, value, reason }) => {
      if (status === 'fulfilled') {
        // Add additional properties for fulfilled promises
        return {
          status,
          value: {
            ...value, // Preserve the original resolved value
            firstName,
            lastName,
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
    // //   .then((values) => values)
  } catch (error) {
    return error;
  }
}
// Above is working code👆👆👆👆
/// / import signUpUser from '../0x01-ES6_promise/4-user-promise';
// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';
// export default function handleProfileSignup(firstName, lastName, fileName) {
//    const trial = Promise.all([signUpUser(), uploadPhoto()])
//     .then((values) => {
//         return values;
//     })
//     .catch (err => {
//     return err;}
//     );
//     }
