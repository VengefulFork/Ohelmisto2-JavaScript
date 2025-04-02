'use strict';
const unList = document.getElementById('unList');
const startYear = parseInt(prompt('Give me the start year'));
const endYear = parseInt(prompt('Give me the end year'));
for (let i = startYear; i <= endYear; i++) {
  if (i % 400 === 0) {
    const leap = document.createElement('li');
    leap.textContent = i.toString();
    unList.appendChild(leap);
  } else if (i % 4 == 0 && i % 100 != 0) {
    const leap = document.createElement('li');
    leap.textContent = i.toString();
    unList.appendChild(leap);
  }

}
console.log(unList);