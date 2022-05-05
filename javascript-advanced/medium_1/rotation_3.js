/*
Given a number, return the number that is its 'final rotation':
  - In sequence, fix the first 0...n digits of the number
    - where `n` is equivalent to the number's length minus two
  - While the digits are fixed, rearrange the unfixed digits by rotating the first digit to the last place
    - Execute this step for each time the numbers are fixed

5283 (string)

fix 0 digits; 5283 is unfixed; rotation is 2835. use this string for the next round
              2835
fix 1 digit;   835 is unfixed; rotation is 358 -> use 2358 for the next round
              2358
fix 2 digits;   58 is unfixed; rotation is 85 -> final number is 2358

735291 -> 735291 unfixed; rotation is 352917
          352917
1 digit    52917 unfixed; rotation is 29175 -> num for next round is 329175
          329175
2 digits    9175 unfixed; rotation is 1759 -> num for next round is 321759
          321759
3 digits     759 unfixed; rotation is 597 -> num for next round is 321597
          321597
4 digits      97 unfixed; rotation 79 -> final num is 321579

Algorithm
- Declared a variable to store the current version of the string
- Iterate from the length of the given number (if it were converted to a string)
  to 2
  - invoke our rotate rightmost, passing in the last version of the string and the current number in the iteration
- Return the final version of the string
*/

function rotateString(string) {
  return string.slice(1) + string[0];
}

function rotateRightmostDigits(digitStr, n) {
  let firstPart = digitStr.slice(0, digitStr.length - n);
  let rotated   = rotateString(digitStr.slice(digitStr.length - n));

  return firstPart + rotated;
}

function maxRotation(number) {
  let currentRotation = String(number);
  const qtyDigits = String(number).length;

  for (let lastDigits = qtyDigits; lastDigits >= 2; lastDigits -= 1) {
    currentRotation = rotateRightmostDigits(currentRotation, lastDigits);
  }

  return parseInt(currentRotation, 10);
}

console.log(maxRotation(735291)     === 321579);
console.log(maxRotation(3)          === 3);
console.log(maxRotation(35)         === 53);
console.log(maxRotation(105)        === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
console.log(maxRotation(11101));

// 24 min