// import signUpUser from '../0x01-ES6_promise/4-user-promise';
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const trial = Promise.all([signUpUser(), uploadPhoto()]);
    // console.log`in here`;
    return trial
      .then(() => trial)
      .catch(() => {
      });
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
