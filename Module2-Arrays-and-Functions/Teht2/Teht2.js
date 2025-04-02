'use strict';
const names = document.getElementById('names');
const numberOfParticipants = parseInt(
    prompt('Give me the number of participants'));
const namesArray = [];
for (let i = 0; i < numberOfParticipants; i++) {
  const participantName = prompt('Give the name of the participant');
  namesArray.push(participantName);
}
namesArray.sort();
for (let i of namesArray) {
  const n = document.createElement('li');
  n.textContent = i.toString();
  names.appendChild(n);
}