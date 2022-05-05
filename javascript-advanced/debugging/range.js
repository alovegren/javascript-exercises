function range(start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
    console.log(end);
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// An error message reporting that the call stack size has been exceeded tells us that we have most likely entered an infinite loop or have invoked a recursive function with no base case. The problem in this ccode is the latter. We've intended to define two functions of the same name `range`, but in fact the `range` variable was reassigned to the function defined on lines 11-13, after its initialization on lines 1-9. The second `range` function calls itself recursively, with no base case. We can fix this code by setting a default parameter for the first `range` function and deleting the second one.

function range(start, end) {
  if (!end) {
    start = 0;
    end = start;
  }

  // ...
}

// This code won't work because both `start` and `end` will be reassigned to `0` when only one argument is passed in, and as a result, `!end` will always evaluate to true because `0` is a falsey value in javascript.