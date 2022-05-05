function isEven(num) {
  return num % 2 === 0;
}

function centerOf(str) {
  let charsToCapture = 1;
  let center = Math.floor(str.length / 2);

  if (isEven(str.length)) {
    charsToCapture = 2
    center -= 1;
  }
  
  return str.slice(center, center + charsToCapture);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"