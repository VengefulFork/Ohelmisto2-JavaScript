// Not the best solution because with extremely large amounts of dice the list eats a lot of memory potentially even crashing
'use strict';
const diceNum = parseInt(prompt('Give the amount of dice'));
const diceEyeSum = parseInt(prompt('Give me the dice eye sum'));
const numbers = [];

let loops = 0;
while (loops !== 10000) {
  let totalSum = 0;
  for (let a = 0; a < diceNum; a++) {
    const diceEye = Math.floor(Math.random() * 6) + 1;
    totalSum = totalSum + diceEye;

  }
  if (totalSum === diceEyeSum) {
    numbers.push(totalSum);
  }
  loops++;
}

let percentage = numbers.length / 10000 * 100;
document.querySelector('#target').innerHTML = 'With ' + diceNum +
    ' dice and sum ' + diceEyeSum + '     chance is about ' +
    percentage.toFixed(1) + '%';

