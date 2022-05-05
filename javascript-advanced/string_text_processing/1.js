function isUppercase(str) {
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (char.toUpperCase() !== char) return false;
  }

  return true;
}

// alternatively

function isUppercase(str) {
  return !/[a-z]/.test(str);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true