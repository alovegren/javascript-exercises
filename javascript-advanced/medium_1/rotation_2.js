/*
Given a number and an integer n, return a rotated number
- Rotate the last n digits
  - In those last n digits, the first digit should be rotated to the end

735291 -> last 3 digits are 291 -> 91 + 2 -> 912 -> 735912
735291 -> last 4 digits are 5291 -> 291 + 5 -> 2915 -> 732915
735291 -> last 5 digits are 35291 -> 5291 + 3 -> 52913 -> 752913
735291 -> last 6 digits are 735291 -> 35291 + 7 -> 352917

Algorithm
- Convert the given number to a string
- Save the section of the string that won't get rotated to a local variable
  - Take a slice of the string from the first letter, of size equal to the string's length minus n
- Take a slice of the resulting string equivalent to the last n numbers
- Invoke the rotateArray method to rotate that slice

- Append the saved first section (line 14) with the resulting rotated slice
- Return the resulting string, converted to a number
*/

function rotateRightmostDigits(digits, n) {
  let digitStr = String(digits);

  let firstPart = digitStr.slice(0, digitStr.length - n);
  let rotated   = rotateString(digitStr.slice(digitStr.length - n));

  return parseInt(firstPart + rotated, 10);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateRightmostDigits(735291, 0));      // 735291
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// 20 min