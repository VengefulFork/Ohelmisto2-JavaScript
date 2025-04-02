'use strict';

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

function concat(names) {
  let namesString = '';
  for (let i of names) {
    namesString += i;
  }
  return namesString;
}

document.querySelector('#target').innerHTML = concat(names);