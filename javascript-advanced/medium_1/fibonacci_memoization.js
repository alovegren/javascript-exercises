/*
Algorithm
- initialize an empty object to store previous return values

- If n is 1 or 2, return 1
  - if an entry in the lookup table exists for the value of n, return it
  - otherwise, compute the sum of calling the function with n-1 and n-2
    - Add this sum as a value to the lookup table with key n
*/

let fibonacci = (function() {
  let fibNums = [undefined, 1, 1]

  return function(n) {
    return fibNums[n] ? fibNums[n] : fibNums[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
})();

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(35));      