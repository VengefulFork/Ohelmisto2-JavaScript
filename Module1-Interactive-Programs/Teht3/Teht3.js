'use strict';
let totalSum = 0;
for (let i = 0; i < 3; i++) {
  let num = prompt('Give me a number');
  const numint = parseFloat(num);
  totalSum = totalSum + numint;
}
document.querySelector('#target').innerHTML = 'Your number is ' + totalSum;