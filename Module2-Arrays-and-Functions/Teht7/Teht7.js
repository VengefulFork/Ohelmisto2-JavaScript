'use strict';

function diceThrower(diceSides) {
  return Math.floor(Math.random() * diceSides) + 1;
}

const diceSides = parseInt(prompt('Give the amount of sides'));
const list = document.getElementById('list');
const diceThrows = [];
let loop = true;
while (loop) {
  const diceThrow = diceThrower(diceSides);
  if (diceThrow === diceSides) {
    diceThrows.push(diceThrow);
    loop = false;
  } else {
    diceThrows.push(diceThrow);
  }
}
for (let i of diceThrows) {
  const n = document.createElement('li');
  n.textContent = i.toString();
  list.appendChild(n);
}