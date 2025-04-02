'use strict';

function diceThrower() {
  return Math.floor(Math.random() * 6) + 1;
}

const list = document.getElementById('list');
const diceThrows = [];
let loop = true;
while (loop) {
  const diceThrow = diceThrower();
  if (diceThrow === 6) {
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
