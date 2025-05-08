'use strict'

const numsOr = [2,7,4]
let numsMo = []

for (let i of numsOr) {
  if (i % 2 === 0) {
    numsMo.push(i)
  }

}

console.log(numsOr)
console.log(numsMo)