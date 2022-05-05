function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// The `arguments` object in JavaScript is available in any function and references an array-like object whose objects are all of the arguments passed to the function invocation.

// In this example, the boolean switch is the second element of the `arguments` object and so we reference it as the conditional statement in our ternary expression on line 2.

// The salary is the first element of the `arguments` object so we reference it on line 2 to determine the bonus amount, if the first branch of the ternary expression is evaluated.