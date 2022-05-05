let rLSync = require('readline-sync');

let int = rLSync.question('Please enter an integer greater than 0:\n');
let operation = rLSync.question('Enter "s" to compute the sum, or "p" to' + ' compute the product.\n');

int = Number.parseInt(int, 10);
let total = 1;

switch (operation) {
  case 's':
    for (let start = 2; start <= int; start += 1) {
      total += start;
    }
    break;
  case 'p':
    for (let start = 2; start <= int; start += 1) {
      total *= start;
    }
}

console.log(`The sum of the integers between 1 and ${int} is ${total}.`);