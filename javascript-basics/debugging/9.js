const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// Each time `read()` is invoked, `currentPage` is declared and initialized to 1. Once the reader's energy has been exhausted and the `while` loop from lines 7-10 is exited, the `if` condition evaluates to true and so `read()` is called recursively on line 19.

// This recursive call causes `currentPage` to be re-initialized to `1`, after which the `while` loop is once more executed, and `read()` is called recursively once more. There is no base case which prevents `read()` from being continually invoked.