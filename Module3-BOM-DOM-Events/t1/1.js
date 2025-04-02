'use strict';

document.getElementById(
    'target').innerHTML = '<li>First item</li> <li>Second item</li> <li>Third item</li>';

let list = document.getElementById('target');
list.classList.add('my-list');