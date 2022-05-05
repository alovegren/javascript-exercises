if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// 1. the code in the block of the `if` statement from lines 1-7 is executed.
//   - the code in the block of the `if` statement from lines 3-5 is executed.
//   2. the code in the `else` clause (lines 5-7) is executed.

// 3. the code in the `else` clause (lines 8-16) is executed
//   - the code in the block of the `if` statement from lines 10-11 is executed and
//   - the code in the block of the `if` statement from lines 12-14 is executed
//   4. the code in the block of the `if` statement from lines 10-11 is executed and
//   - the code in the block of the `if` statement from lines 12-14 is not executed

// 4. the code in the `else` clause (lines 8-16) is executed but only line 9 is run because the condition on line 10 does not evaluate to true

// 5. the condition on line 1 is not satisfied so none of the code from lines 2 through 16 is executed
