'use strict';
const numstr = prompt('Give me a number');
const num = parseFloat(numstr);
const answer = confirm('Should I calculate the square root');

if (answer) {
  if (num >= 0) {
    const squareroot = Math.sqrt(num);
    document.querySelector('#target').innerHTML = 'The square root of ' + num +
        ' is ' + squareroot;
  } else if (num < 0) {
    document.querySelector(
        '#target').innerHTML = 'Negative numbers dont have a defined square root';
  }
} else if (answer === false) {
  document.querySelector(
      '#target').innerHTML = 'Okay not calculating square root';
}