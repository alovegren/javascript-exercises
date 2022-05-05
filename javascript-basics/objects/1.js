const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]);
// console.log(myObject[a]); // This raises a ReferenceError
console.log(myObject.a);
console.log(myObject);

// When accessing the value of a property using bracket notation, the operand inside the brackets must be a string value or an expression that resolves to a string value (implicit coercion might be involved). The following will work:

let a = 'a';
console.log(myObject[a]); // => name