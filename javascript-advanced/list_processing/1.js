function sum(int) {
  return String(int).split('')
                    .map(char => parseInt(char, 10))
                    .reduce((currentSum, digit) => currentSum + digit);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45