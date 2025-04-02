'use strict';

let loop = true;
const numbers = [];
while (loop) {
  const number = parseInt(prompt('Give me a number'));
  if (numbers.includes(number)) {
    document.querySelector(
        '#target').innerHTML = 'Number is already in the list';
    loop = false;
  } else {
    numbers.push(number);

  }
}
numbers.sort();
for (let i of numbers) {
  console.log(i);
}