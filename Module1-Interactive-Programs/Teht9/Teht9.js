'use strict';
let flag = true;
const num = parseInt(prompt('Give me a number to check if its a prime'));
if (num > 1) {
  for (let i = 2; i < Math.floor(num / 2); i++) {
    if (num % i === 0) {
      flag = false;
    }
  }
}
if (flag) {
  document.querySelector('#target').innerHTML = 'Number ' + num + ' is a prime';
} else {
  document.querySelector('#target').innerHTML = 'Number ' + num +
      ' is not a prime';
}