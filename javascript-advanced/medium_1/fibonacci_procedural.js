/*
Problem
- Given a positive integer n, 
  - Return the nth fibonacci number without using recursion

  - The first and second fibonacci numbers are 1.
  - All subsequent numbers are the sum of the previous two numbers
  - So the beginning of the sequence looks like this: 1, 1, 2, 3, 5, 8, 13...
    F(1) = 1
    F(2) = 1
    F(3) = F(1) + F(2)
    F(4) = F(2) + F(3)
    ...
    F(n) = F(n - 2) + F(n - 1)

Data structure
- array to build the sequence of numbers

Algorithm
  - Initialize an array to hold the fibonacci numbers
  Start counting at one... and continue while the count is less than or equal to n
  - If the count is 1 or 2, add 1 to the array and move on to the next iteration
  - Push (the sum of the last element in the array and the penultimate element in the array) to the array

  - return the last element in the array

e.g. fibonacci(6)

fibonacci numbers = []

count = 1
fibonacci numbers = [1]

count = 2
fibonacci numbers = [1, 1]

count = 3
fibonacci numbers = [1, 1]
sum = fib[fib.length - 1] + fib[fib.length - 2] = 2
fibonacci numbers = [1, 1, 2]

count = 4
fibonacci numbers = [1, 1, 2]
fibonacci numbers = [1, 1, 2, 3]

count = 5
fibonacci numbers = [1, 1, 2, 3]
fibonacci numbers = [1, 1, 2, 3, 5]

count = 6
fibonacci numbers = [1, 1, 2, 3, 5]
fibonacci numbers = [1, 1, 2, 3, 5, 8]

return 8

*/

function fibonacci(n) {
  let fibonacciNumbers = [1, 1];

  for (let count = 3; count <= n; count += 1) {
    let last       = fibonacciNumbers[fibonacciNumbers.length - 1];
    let secondLast = fibonacciNumbers[fibonacciNumbers.length - 2];
    fibonacciNumbers.push(last + secondLast);
  }

  return fibonacciNumbers.pop();
}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);