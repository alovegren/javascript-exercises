function isPalindrome(str) {
  let chars = str.split('');
  let reversed = ''

  for (let idx = chars.length - 1; idx >= 0; idx--) {
    reversed += chars[idx];
  }

  return reversed === str;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true