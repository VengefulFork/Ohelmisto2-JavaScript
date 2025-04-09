'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const b = document.getElementById('target')

for (let i of students) {
  const n = document.createElement('option')
  n.value = i['id'];
  n.textContent = i['name'].toString();
  b.appendChild(n);
}