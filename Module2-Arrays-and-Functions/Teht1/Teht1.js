'use strict';
const numbers = [];
for (let i = 0; i < 5; i++) {
  let givenNumber = parseInt(prompt('Give me a number'));
  numbers.push(givenNumber);
}
console.log(numbers);

function reverser(numbers) {
  let a = 0, reversedNumbers = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers[a] = numbers[i];
    a++;
  }
  return reversedNumbers;
}

console.log(reverser(numbers));