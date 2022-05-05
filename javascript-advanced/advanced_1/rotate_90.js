/*
Problem
- Given an array of arrays representing a matrix,
  - Return the 90-degree rotation of that matrix
  - A 90-degree rotation produces a new matrix where **each side** of the matrix is rotated **clockwise** by 90 degrees.

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

// a 90-degree-rotation is the same as a transposition wherein the new rows are formed from column-bottom to column-top (instead of top to bottom)

[[3, 4, 1], // [3, 4, 1] was a column ending in 3
 [9, 7, 5],
 [6, 2, 8]
 ]
 
 // if we rotate the same matrix again...
 
 [
  [6, 9, 3],
  [2, 7, 4],
  [8, 5, 1]
]

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];


[
  [5, 3],
  [1, 7],
  [0, 4],
  [8, 2]
]

// rotating again...

[
  [8, 0, 1, 5],
  [2, 4, 7, 3]
]

e.g. input:

[
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

matrix = []
iterate through 0..2

  colNum = 0
  row = []
  iterate through 2..0
  
    rowNum = 2
    input[2][0] = 3
    row = [3]
    
    rowNum = 1
    input[1][0] = 4
    row = [3, 4]
    
    rowNum = 0
    input[0][0] = 1
    row = 3, 4, 1
    
  colNum = 1
  row = []
  iterate through 2..0
    
    rowNum = 2
    input[2][1] = 9
    
    rowNum = 1
    input[1][1] = 7
    
    rowNum = 0
    input[0][1] = 5

3  4  1
9  7  5
6  2  8

Algorithm
**Transpose the matrix, building each row from column bottom to column top**


1. Create a new array to store the rotated matrix
2. Iterate through the indices of the first row (new column numbers)
  - Create a new array to store the current row
  - Iterate through the number of subarrays (rows) starting from the last index, going to 0
    - Add the element at the subarray at the index determined by the inner iteration, at the index determined by the outer iteration
    
  - Add the new row to the matrix
- Return the matrix

*/

function rotate90(matrix) {
  let rotated = [];
  
  for (let colNum = 0; colNum < matrix[0].length; colNum += 1) {
    let row = [];
    
    for (let rowNum = matrix.length - 1; rowNum >= 0; rowNum -= 1) {
      row.push(matrix[rowNum][colNum]);   
    }
    
    rotated.push(row);
  }
  
  return rotated;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);

// if we rotate a matrix by 90 degrees 4 times, we get the original matrix back
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]