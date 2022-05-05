/*
Problem
- Given a number n, return a number:
  - The difference between:
  - The square of the sum of the first n numbers (starting with 1)
  - The sum of the squares of the first n numbers
  - In other words, subtract the (sum of squares) from the (sum squared)
  
let n = 10
- Sum squared: (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)**2 = 55**2 = 3025
- Sum of squares: (1 + 4 + 9 + 16 + 25 + 36 + 49 + 64  + 81 + 100) = 385
- Sum squared - sum of squares = 2640

Data structure
- Array 
  - one array of the first n numbers
  - transform it to the squares
  
Algorithm
- Generate a sequence of numbers from 1 to n
- Generate another sequence by transforming the first sequence to squares
- Sum the numbers in the first sequence, then square that sum
- Sum the numbers in the second sequence

- Subtract the second sum (line 23) from the first sum (line 22)
*/

function sumElems(arr) {
  return arr.reduce((sum, currentNum) => sum + currentNum);
}

function sumSquareDifference(num) {
  let sequence = [];
  
  for (let nextNum = 1; nextNum <= num; nextNum += 1) {
    sequence.push(nextNum);
  }
  
  let squares = sequence.map(num => num ** 2);
  
  let squareOfSum  = sumElems(sequence) ** 2;
  let sumOfSquares = sumElems(squares);
  
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(2));      // (1 + 2)**2 - (1**2 + 2**2) = 9 - 5 = 4
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150