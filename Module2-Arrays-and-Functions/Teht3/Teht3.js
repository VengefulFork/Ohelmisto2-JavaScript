'use strict';
const dogs = document.getElementById('dogs');
const dogsArray = [];
for (let i = 0; i < 6; i++) {
  const dogName = prompt('Give me the name of a dog');
  dogsArray.push(dogName);
}
dogsArray.sort().reverse();
for (let i of dogsArray) {
  const n = document.createElement('li');
  n.textContent = i.toString();
  dogs.appendChild(n);
}
