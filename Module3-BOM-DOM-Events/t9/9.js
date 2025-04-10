'use strict';

function oneLineCalculator() {
  const operators = ['+', '-', '*', '/'];
  const input = document.getElementById('calculation').value;
  let operator = '';
  for (let i of operators) {
    if (input.includes(i)) {
      operator = i;
    }
  }
  let inputSplit = input.split(operator);
  let num1 = parseInt(inputSplit[0]);
  let num2 = parseInt(inputSplit[1]);

  let result = 0;
  switch (operator) {
    case '+' :
      result = num1 + num2;
      break;
    case '-' :
      result = num1 - num2;
      break;
    case '*' :
      result = num1 * num2;
      break;
    case '/' :
      result = num1 / num2;
      break;

  }
  document.getElementById('result').innerHTML = result.toString();
}

const button = document.getElementById('start');
button.addEventListener('click', function(evt) {
  oneLineCalculator();
});