// for (let count = 1; count < 100; count += 2) {
//   console.log(count);
// }

let rLSync = require('readline-sync')

let count = Number(rLSync.question("What number should we start with? "))
let stop = Number(rLSync.question("What number should we end on? "))

while (count <= stop) {
  if (count % 2 === 1) console.log(count);
  count += 1;
}