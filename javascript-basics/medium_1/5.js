// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// // This code snippet will log 'The total value is 15' because the function `counter()` is hoisted above the declaration of `counter`. `counter` is then essentially reassigned to `5` on line 1.

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;

// This code snippet will log 'The total value is NaN'. Since the `var` declaration doesn't occur until after line 15, `counter` references the function definition, not the Integer 5. When you try to multiply a function (not to be confused with a return value from a function invocation) by a number, you get NaN.

// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// This code snippet will log 'The total value is 15' for the same reason the code in the first snippet did. 

let counter = 5;
let rate = 3;

function counter(count) { // the error occurs here, before the function is hoisted. 
  // ...
}

console.log('The total value is ' + String(counter * rate));

// This code will raise an error. Once a variable in the current scope is declared, it cannot be declared again with `const` or `let`.