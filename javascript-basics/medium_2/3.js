let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// On lines 1-3 three variables are declared and initialized to Number objects. The variable `startingBalance` is declared with `let`, while `chicken` and `chickenQuantity` are declared with `const`.

// On line 10, the function `totalPayable` is invoked with two arguments, the values referenced by `chicken` and `chickenQuantity`. In the function body, we see that the product of the two arguments summed with the value referenced by `startingBalance` is to be returned. Since `startingBalance` was declared on the global scope, it is available from `totalPayable`. `startingBalance` was reassigned to `5` on line 9, so the final return value of the arithmetic operations is `40`.

// On line 12, `startingBalance` is again reassigned, to `10`. Accordingly, `totalPayable` returns `45`.

// JavaScript dynamically looks up the value for `startingBalance` each time `totalPayable` is called because a closure was formed when `totalPayable` was defined. This means that rather than `startingBalance` retaining a static value of `1` each time the function was called, it successfully retrieved the reference to the values reassigned on lines 9 and 12, when invoked on lines 10 and 13, respectively.