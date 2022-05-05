// let isUpperCase = (char) => /[A-Z]/.test(char);

// function letterReplacer(newStr, char) {
//   let replacement = isUpperCase(char) ? char.toLowerCase() : char.toUpperCase();
//   return newStr + replacement;
// }

// function swapCase(str) {
//   return str.split('').reduce(letterReplacer, '');
// }

function swapCase(str) {
  return str.replace(/[a-z]/gi, swap);
 }
 
 let swap = function(letter) {
   return String.fromCharCode(letter.charCodeAt() ^ 32);
 }

console.log(swapCase('CamelCase')         === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");