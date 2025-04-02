'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const num = getRandomInt(4);
switch (num) {
  case 1 :
    document.querySelector('#target').innerHTML = 'You are in Gryffindor';
    break;
  case 2 :
    document.querySelector('#target').innerHTML = 'You are in Slytherin';
    break;
  case 3:
    document.querySelector('#target').innerHTML = 'You are in Hufflepuff';
    break;
  case 4:
    document.querySelector('#target').innerHTML = 'You are in Ravenclaw';
    break;
}
