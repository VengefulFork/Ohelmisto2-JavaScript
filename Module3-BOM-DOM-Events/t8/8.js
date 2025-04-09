'use strict'

function calculator() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const operator = document.getElementById('operation').value;
  let result = 0

  switch (operator) {
    case 'add' :
      result = num1 + num2
      break;
    case 'sub' :
      result = num1 - num2
      break;
    case 'multi' :
      result = num1 * num2
      break;
    case 'div' :
      result = num1 / num2
      break;

  }
  document.getElementById('result').innerHTML = result.toString()
}

const button = document.getElementById('start')
button.addEventListener('click', function(evt) {
  calculator()
})

