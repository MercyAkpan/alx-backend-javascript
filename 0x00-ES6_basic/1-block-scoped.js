// export default function taskBlock(trueOrFalse) {
//   const task = false;
//   const task2 = true;

//   if (trueOrFalse) {
//     const task = true;
//     const task2 = false;
//   }
//   // console.log(task, task2);
//   return [task, task2];
// }
//  BELOW IS NOT MY CODE
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}