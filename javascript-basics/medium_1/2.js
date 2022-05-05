let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// This will result in an infinite loop. `i` is only incremented if the `else` clause is executed, and since on the first iteration `i` is equal to `0` and `0 % 3 === 0`, the loop will continue logging `i` to the console without any way to break out of the loop.