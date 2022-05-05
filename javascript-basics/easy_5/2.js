function isConsonant(char) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const VOWELS   = 'aeiou'.split('');

  return ALPHABET.includes(char.toLowerCase())
         && !VOWELS.includes(char.toLowerCase());
}

function doubleConsonants(str) {
  let newStr = ''

  for (let strIdx = 0; strIdx < str.length; strIdx += 1) {
    let char = str[strIdx];
    isConsonant(char) ? newStr += (char + char) : newStr += char;
  }

  return newStr;
}

console.log(doubleConsonants('String') ==       "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') == "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') ==     "JJullyy 4tthh");
console.log(doubleConsonants('') ==             "");