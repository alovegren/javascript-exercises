let isPalindrome = str => str === str.split('').reverse().join('');

let isLetter = char => char >= '0' && char <= '9';

function toLowerAlphaOnly(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = ''

  str.split('').forEach(char => {
    let downcased = char.toLowerCase();
    if (alphabet.includes(downcased) || isLetter(char)) {
      result += downcased;
    }
  });

  return result;
}

function isRealPalindrome(str) {
  return isPalindrome(toLowerAlphaOnly(str));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false