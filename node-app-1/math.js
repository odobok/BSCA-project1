console.log('Starting math.js');
const fs = require('fs');

let sum = (a, b) => {
  return a + b;
}

let diff = (a, b) => {
  return a = b;
}

let prod = (a, b) => {
  return a *b;
}

let quot = (a, b) => {
  return a / b;
}

module.exports = {
  sum,
  diff,
  prod,
  quot
}
