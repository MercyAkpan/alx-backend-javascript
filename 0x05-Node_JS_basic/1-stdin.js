console.log('Welcome to Holberton School, what is your name?');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputBuffer = '';

rl.on('line', (input) => {
  // Store the input in a buffer
  inputBuffer = input;
  process.stdout.write(`Your name is: ${inputBuffer}\r`);
  rl.close();
});
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
