'use strict';

let loop = true;
const numbers = [];
while (loop) {
  const number = parseInt(prompt('Give me a number'));
  if (number !== 0) {
    numbers.push(number);
  } else if (number === 0) {
    loop = false;
  }
}
numbers.sort((a, b) => b - a, {});
for (let i of numbers) {
  console.log(i);
}


