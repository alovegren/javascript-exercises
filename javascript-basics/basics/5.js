let rLSync = require('readline-sync')
let firstNumber = rLSync.question("==> Enter the first number: ");
let secondNumber = rLSync.question("==> Enter the second number: ");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

let sum = firstNumber + secondNumber;
console.log(`${firstNumber} + ${secondNumber} = ${sum}`);

let difference = firstNumber - secondNumber;
console.log(`${firstNumber} - ${secondNumber} = ${difference}`);

let product = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${product}`);

let quotient = Math.floor(firstNumber / secondNumber);
console.log(`${firstNumber} / ${secondNumber} = ${quotient}`);

let remainder = firstNumber % secondNumber;
console.log(`${firstNumber} % ${secondNumber} = ${remainder}`);

let exponential = firstNumber ** secondNumber;
console.log(`${firstNumber} ** ${secondNumber} = ${exponential}`);