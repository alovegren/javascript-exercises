function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// A local variable with block scope is declared with `const` on line 2 and initialized to the string `'debugging'`. A function declaration follows, from lines 3-5 in which the object to which some variable `status` points is logged to the console. Since functions can access variables on a surrounding scope, this is the same `status` that was initialized on line 2.

// `debugIt` is invoked on line 10, causing `logger()` to be invoked on line 7, calling `console.log`. 