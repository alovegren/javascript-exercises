/*
Given a matrix with at least one row and at least one column, but not necessarily having rows and columns in equal numbers,
  - Return the transpose of the matrix

Examples
- For example, if a matrix has 5 rows and 3 columns, its transpose should have 3 rows and 5 columns.

[
  [1, 2, 3, 4, 5], 
  [4, 3, 2, 1, 0], 
  [3, 7, 8, 6, 2]
]

--> [
  [1, 4, 3], 
  [2, 3, 7], 
  [3, 2, 8], 
  [4, 1, 6], 
  [5, 0, 2]
]

[[1, 2, 3, 4]]

--> [
  [1],
  [2],
  [3], 
  [4]
]

// 4 rows and 2 columns
M [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
]

C: 0
  row: []
  R: 0
  M[0][0] = 1

  row: [1]
  R: 1
  M[1][0] = 3

  row [1, 3]
  R: 2
  M[2][0] = 5

  R: 3

C: 1

--> 2 rows and 4 columns
[
  [1, 3, 5, 7],
  [2, 4, 6, 8]
]

Algorithm
* I want as many rows in the new array as there are columns in the old one.

- Create a new array to contain the new matrix
- Iterate through the indices of the first row (it could be any row): current iteration: column number (C)
  * Populate an array with a subarray containing all elements at the current index, in every row
    - Create a subarray to contain the current row
    - Iterate through the indices of each subarray (position of subarray in the larger array) (row number (R))
    - Add the element at the current row, at the current column FROM the original matrix to a subarray in the new matrix
  - Add the new row to the new matrix
*/

function transpose(matrix) {
  let transposed = [];

  for (let colNum = 0; colNum < matrix[0].length; colNum += 1) {
    let row = [];

    for (let rowNum = 0; rowNum < matrix.length; rowNum += 1) {
      row.push(matrix[rowNum][colNum]);
    }

    transposed.push(row);
  }

  return transposed;
}

// one row, 4 columns
console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]

// 4 rows, 1 column
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]

// 1 row, 1 column
console.log(transpose([[1]]));                     // [[1]]

// more columns than rows
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// more rows than columns
console.log(transpose([[1, 2], [3, 4], [5, 6], [7, 8]]));
// [[1, 3, 5, 7], [2, 4, 6, 8]]