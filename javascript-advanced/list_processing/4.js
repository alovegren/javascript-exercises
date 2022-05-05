/*
Abstractions
- Write a function to sum all numbers in an array

- Iterate through a list of numbers representing the indices of the array
  starting from 1
  - Sum the current sum of the array together with a slice of elements from
    0 to the current index
  - e.g. [3, 5, 2] starting sum is 0
  - 0 + the first element = 3
  - 3 + the sum of the first and second elements = 3 + 3 + 5
  - 3 + the sum of the first, second and third elements = 3 + 3 + 5 + 3 + 5 + 2
*/

function sumArr(arr) {
  return arr.reduce((sum, elem) => sum + elem);
}

function sumOfSums(arr) {
  return arr.reduce((sum, _elem, idx) => {
    return sum + sumArr(arr.slice(0, idx + 1));
  }, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35