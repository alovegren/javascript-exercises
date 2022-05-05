// alternative 1
// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myArray);
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myArray);
// console.log(myOtherArray);

// alternative 2
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.concat();

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);