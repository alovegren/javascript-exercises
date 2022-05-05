let rLSync = require('readline-sync');

function numberSuffix(num) {
  switch (num) {
    case 1: return 'st';
    case 2: return 'nd';
    default: return 'th';
  }
}

let numbers = [];

for (let count = 1; count <= 6; count++) {
  ordinalNum = String(count) + numberSuffix(count);
  numbers.push(Number(rLSync.question(`Enter the ${ordinalNum} number: `)));
}

let sixthNumber = numbers.pop();

let condition = (elem) => elem > 25;

let verdict = numbers.some(condition) ? 'appears' : 'does not appear';

console.log(`The number ${sixthNumber} ${verdict} in [${numbers.join(', ')}].`)