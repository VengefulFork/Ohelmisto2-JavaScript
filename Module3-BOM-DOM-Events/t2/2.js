'use strict';

const items = ['First item', 'Second item', 'Third item'];

const list = document.getElementById('target')

for (let i of items) {
  const n = document.createElement('li')
  n.textContent = i.toString();
  list.appendChild(n);
}

let target = document.getElementsByTagName('li')[1];
target.classList.add('my-item');