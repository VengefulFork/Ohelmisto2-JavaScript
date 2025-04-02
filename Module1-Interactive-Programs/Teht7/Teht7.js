'use strict';
const dicenumstr = prompt('Give me the number of dice');
const dicenum = parseInt(dicenumstr);
let totalsum = 0;
for (let i = 0; i < dicenum; i++) {
  const diceEye = Math.floor(Math.random() * 6) + 1;
  totalsum += diceEye;

}
document.querySelector('#target').innerHTML = 'Total sum of all ' + dicenum +
    ' thrown dice is ' + totalsum;