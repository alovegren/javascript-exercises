// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

/*
This code logs `'Hello, world!'` to the console. Function declarations are hoisted along with their bodies.

Hoisting is the process of finding and associating variable declarations with their scopes prior to the execution of code.
*/

// Further Exploration
function logValue() {
  console.log('Hello, world!');
}

var logValue = 'foo';

console.log(typeof logValue);

/*
The hoisted equivalent of this code is:

var logValue;
function logValue() {
  console.log('Hello, world!');
}

logValue = 'foo';

console.log(typeof logValue);

This means that the code on line 31 is treated as an assignment. Therefore, the data type of the value referenced by `logValue` is `'String'`.
*/