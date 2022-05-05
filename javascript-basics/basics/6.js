rLSync = require("readline-sync");

let phrase = rLSync.question("Please enter a phrase: ")

function countCharacters(string) {
  let stringArr = string.split(' ');

  return stringArr.reduce(function(lengthTotal, string) {
    return lengthTotal + string.length;
  }, 0);
}

console.log(`There are ${countCharacters(phrase)} characters in ${phrase}.`);