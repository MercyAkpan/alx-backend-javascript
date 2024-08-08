export default function taskBlock(trueOrFalse) {
    var task = false; 
    var task2 = true;
    // console.log(task, task2);
    if (trueOrFalse) {
      let task = true;
      let task2 = false;
    }
  
    return [task, task2];
  }