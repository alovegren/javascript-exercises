/* 
Problem
Given an integer n, return the nth Fibonacci number using a recursive function
  - The first and second fibonacci numbers are 1.
  - All subsequent numbers are the sum of the previous two numbers
  - So the beginning of the sequence looks like this: 1, 1, 2, 3, 5, 8, 13...
    F(1) = 1
    F(2) = 1
    F(3) = F(1) + F(2)
    F(4) = F(2) + F(3)
    ...
    F(n) = F(n - 2) + F(n - 1)

Data structures
- None; use conditional logic instead

Algorithm
- If n is 1 or 2, return 1
- Otherwise, return the sum of calling the function with n-1 and n-2

e.g. F(6)

- calls F(5) and F(4):
  F(5) - calls F(4) and F(3) --------------------------------------------> sums to 5
    F(4) - calls F(3) and F(2)   --------------------------> sums to 3
      F(3) - calls F(2) and F(1) -----------> sums to 2
        F(2) ---------------> returns 1
        F(1) ---------------> returns 1
      F(2) ---------------------------------> returns 1
    F(3) - calls F(2) and F(1)   --------------------------> sums to 2
      F(2) ---------------------------------> returns 1
      F(1) ---------------------------------> returns 1
  F(4) - calls F(3) and F(2) --------------------------------------------> sums to 3
    F(3) - calls F(2) and F(1)    -------------------------> sums to 2
      F(2) ---------------------------------> returns 1
      F(1) ---------------------------------> returns 1
    F(2) - ------------------------------------------------> returns 1

  FINAL RETURN VALUE: 8
*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765