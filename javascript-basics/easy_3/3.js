let rLSync = require('readline-sync');

let age = Number(rLSync.question('What is your age? '));
let retirementAge = Number(rLSync.question('At what age would you like to retire? '));
let workYearsRemaining = retirementAge - age;

let thisYear = Date().getFullYear();
let retirementYear = thisYear + workYearsRemaining;

console.log(`It's ${thisYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${workYearsRemaining} years of work to go!`);
