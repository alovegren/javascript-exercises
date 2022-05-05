function isDoubleNumber(number) {
  let numStr = String(number);

  let midPt = numStr.length / 2;
  let firstHalf = numStr.slice(0, midPt);
  let secondHalf = numStr.slice(midPt, numStr.length);

  return firstHalf === secondHalf;
}

function twice(number) {
  return isDoubleNumber(number) ? number : number * 2;
}


console.log(twice(37)     === 74);
console.log(twice(44)     === 44);
console.log(twice(334433) === 668866);
console.log(twice(444)    === 888);
console.log(twice(107)    === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333)   === 3333);
console.log(twice(7676)   === 7676);