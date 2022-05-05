let rLSync = require('readline-sync');

let nums = [1, 2, 4, 5, 6];
let operation = rLSync.question('Enter "s" to compute the sum, or "p" to' + ' compute the product.\n');

function computeTotal(numbers, operation) {
  return numbers.reduce((accumulator, currentNum) => {
    switch (operation) {
      case 's':
        return accumulator + currentNum;
      case 'p':
        return accumulator *= currentNum;
    }
  });
}

console.log(computeTotal(nums, operation));