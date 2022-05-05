// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

// the comparison of `person` and `otherPerson` using the strict equality operator evaluates to `false` because only two references to the same object will be treated as 'equal' in JavaScript.

// Such is not the case with primitives e.g.

const a = "hi there";
const b = "hi there";

console.log(a === b); // true

// If we expect an output of `true` when comparing `person` and `otherPerson` for equality, we need to ensure `person` and `otherPerson` are pointing to the same object:

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // true

// Now that `person` and `otherPerson` each store a reference to the same object, the two variables compare equally.