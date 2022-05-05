DIGIT_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function divMod(dividend) {
  let remainder = dividend % 10
  let remaining = (dividend - remainder) / 10;
  return [remainder, remaining]
}

function integerToDigits(int) {
  let digits = []

  do {
    let divModResult = divMod(int)
    digits.push(divModResult[0]);
    int = divModResult[1];
  } while (int > 0);

  return digits.reverse();
}

function integerToString(int) {
  let digits = integerToDigits(int);
  return digits.map(digit => DIGIT_CHARS[digit]).join('');
}

function signedIntegerToString(int) {
  if (int === 0) return '0';
  let isNegative = false;
  
  if (int < 0) {
    isNegative = true;
    int *= -1;
  }
  
  let string = integerToString(int);
  return isNegative ? `-${string}` : `+${string}`;
}

console.log(integerToString(123));
console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"