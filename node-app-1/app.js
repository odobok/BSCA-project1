const fs = require('fs');
const os = require('os');
const math = require('./math.js');
//const _ = requre('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
let command = argv._[0];
let first = argv._[1];
let second = argv._[2];
console.log('starting app');




if (command === 'add') {
  console.log(math.sum(first, second));
} else if (command === 'subtract') {
  console.log(math.diff(first, second));
} else if (command === 'multiply') {
  console.log(math.prod(first, second));
} else if (command === 'divide') {
  console.log(math.quot(first, second));
} else {
  console.log('Wrong')
}

console.log('Yargs', argv);
