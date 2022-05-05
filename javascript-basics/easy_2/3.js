// function stringy(int) {
//   let stringy = '';
//   let on = true;

//   for (let i = 0; i < int; i += 1) {
//     let bit = on ? 1 : 0;
//     stringy += bit;
//     on = !on;
//   }

//   return stringy;
// }

function stringy(int) {
  multiplier = parseInt(int / 2)
  addExtraBit = (int % 2 === 1);

  let stringy = '10'.repeat(multiplier);
  stringy += addExtraBit ? '1' : '';

  return stringy;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");