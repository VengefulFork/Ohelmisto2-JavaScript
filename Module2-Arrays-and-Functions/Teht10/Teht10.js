'use strict';

function votingMachine() {
  const numOfCandidates = parseInt(prompt('Give the amount of candidates'));
  let b = 0;
  const candidates = [];
  for (let i = 0; i < numOfCandidates; i++) {
    const candidate = {
      name: '',
      votes: 0,
    };
    candidate.name = prompt('Give the name of a candidate');
    candidates.push(candidate);
  }

  const numOfVotes = parseInt(prompt('Give the number of voters'));
  for (let i = 0; i < numOfVotes; i++) {
    const name = prompt('Give the name of the candidate you want to vote for');
    for (let i of candidates) {
      if (i.name === name) {
        const vote = prompt(
            'If you wish to vote input y, non y inputs will be considered as empty vote');
        if (vote === 'y') {
          i.votes += 1;
          alert('You have voted for ' + i.name);
        } else if (vote !== 'y') {
          alert('You cast an empty vote for ' + i.name);
        }
      }
    }

  }
  candidates.sort((a, b) => b.votes - a.votes,
  );
  console.log('Winner of the election is ' + candidates[0]['name'] + ' with ' +
      candidates[0]['votes'] + ' votes.');
  console.log('Results are: ');
  candidates.forEach((i) => {
    console.log(`Name of candidate: ${i.name} Votes:${i.votes}`);
  });

}

votingMachine();