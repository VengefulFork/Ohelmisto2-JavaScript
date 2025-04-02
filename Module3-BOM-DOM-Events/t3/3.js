'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.getElementById('target');
let items = '';
for (let i = 0; i < names.length; i++) {
  items += `<li>${names[i]}</li>`;
}

list.innerHTML = items;