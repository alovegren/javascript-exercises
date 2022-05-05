// function cleanUp(str) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let chars = str.split('');
//   cleanString = ''

//   for (let char of chars) {
//     if (ALPHABET.includes(char)) {
//       cleanString += char;
//     } else if (cleanString.at(-1) !== ' ') {
//       cleanString += ' ';
//     }
//   }

//   return cleanString;s
// }

function cleanUp(str) {
  return str.replace(/[^a-zA-Z]+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");