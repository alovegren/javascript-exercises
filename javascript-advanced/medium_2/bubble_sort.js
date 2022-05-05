/*
Problem
- Given an array containing at least two string or number arguments,
  - Return the same array, sorted ascending order.
  - Sort the array by using the bubble sort algorithm
  
Edge cases
- Mixed data types?
- Other data types besides strings and numbers
- [1, 2, [1, 2]]

[5, 4, 3]
copy = [5, 4, 3]

helper
idx = 0
[5, 4, 3][0] > [5, 4, 3][1] ---> true
array is now [4, 5, 3]

idx = 1
[4, 5, 3][1] > [4, 5, 3][2] ---> true
array is now [4, 3, 5]

helper function returns [4, 3, 5]
[4, 3, 5] === [5, 4, 3] -------> false

copy: [4, 3, 5]

helper
idx = 0
[4, 3, 5][0] > [4, 3, 5][1] ---> true
array is now [3, 4, 5]

idx = 1 will not swap

helper function return [3, 4, 5]
[3, 4, 5] === [4, 3, 5] -------> false

copy = [3, 4, 5]

helper
idx = 0
no swap
idx = 1
no swap

[3, 4, 5] === [3, 4, 5] ---------> main function returns [3, 4, 5]

Algorithm
- Continue making passes, swapping elements as needed, until a pass has been made with no swaps. At that point, return a mutated array (assumming it wasn't sorted already)

array comparison helper function (return true if arrays are equal)
- determine which array is longer


- return false if the arrays are not the same length

- iterate through one array, keeping track of the current index
  - if the elements in both arrays are not the same, function returns false
- return true

"pass" helper function (args: array)
- Iterate from 0 to the index of the penultimate element in the passed in array
  - Check whether the element at the current index is greater than the element at the next index
  - If so, swap the elements
- Return the array

Main function
- Begin looping
  - Make a copy of the array in its current state
  - Use a helper function to make a "pass" that will return an array with any swaps made.
  - If the  array from the helper function and the prior copy made have elements in the same order, return the  "passed" array.

*/

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  let arraysEqual = true;
  
  arr1.forEach((elem, idx) => {
    if (elem !== arr2[idx]) arraysEqual = false;
  });
                 
  return arraysEqual;
}

function makePass(array) {
  for (let idx = 0; idx < array.length - 1; idx += 1) {
     if (array[idx] > array[idx + 1]) [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
  }
}

function bubbleSort(array) {
  while (true) {
    let currentCopy = array.slice();
    makePass(array);
    if (areArraysEqual(array, currentCopy)) return;
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]