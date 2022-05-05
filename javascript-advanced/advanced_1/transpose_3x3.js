/*
Given an array consisting of three subarrays,
each of which contain three elements,
  - Return the transpose of the given array

If we imagine that the subarrays in the original array make up the rows of the original matrix,
we want to return an array in which the original columns are the new rows.

e.g.

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

// returns 
[
[1,  4,  3],
[5,  7,  9],
[8,  2,  6],
]

Data structure
- Create a new array of arrays

Algorithm
- Create an empty array to store the new matrix
- Iterate beginning with 0, as many times as there are elements in the first row (column count)
  - Push a new array to the new matrix, consisting of:
    - The elements at the current count in each subarray (e.g. element at index 0 in first arr, element at index 0 in second arr, ...)
- Return the new matrix
*/

function transpose(matrix) {
  let transposed = [];

  for (let columnNum = 0; columnNum < matrix[0].length; columnNum += 1) {
    transposed.push([matrix[0][columnNum], matrix[1][columnNum], matrix[2][columnNum]]);
  }

  return transposed;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const matrix2 = [
  [1, 1, 2],
  [9, 2, 4],
  [9, 2, 6]
]

const newMatrix  = transpose(matrix);
const newMatrix2 = transpose(matrix2);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(newMatrix2);      // [[1, 9, 9], [1, 2, 2], [2, 4, 6]]
console.log(matrix2);         // [[1, 1, 2], [9, 2, 4], [9, 2, 6]]