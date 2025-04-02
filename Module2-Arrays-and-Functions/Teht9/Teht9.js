'use strict';

const numbers = [2, 7, 4];

function even(numbers) {
  const evenList = [];
  for (let i of numbers) {
    if (i % 2 === 0) {
      evenList.push(i);
    }
  }
  return evenList;
}

console.log(numbers);
console.log(even(numbers));
