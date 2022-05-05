/*
P
Given two sorted arrays, return a new array containing all elements from both arrays in sorted order
  - Do not build the new array and then sort it; **build it in the correct order**
  - Do not mutate the input arrays

E
merge([1, 5, 9], [2, 6, 8])
results = []
arr1 = [1, 5, 9]
arr2 = [2, 6, 8]

loop
  neither array is empty
  arr1[0] is less than arr2[0]
  result array = [1]

  arr1 = [5, 9]
  arr2 = [2, 6, 8]
  arr2[0] is less than arr1[0]
  result array = [1, 2]

  arr1 = [5, 9]
  arr2 = [6, 8]
  arr1[0] is less than arr2[0]
  result array = [1, 2, 5]

  arr1 = [9]
  arr2 = [6, 8]
  arr2[0] is less than arr1[0]
  result array = [1, 2, 5, 6]

  arr1 = [9]
  arr2 = [8]
  arr1[0] is less than arr2[0]
  result array = [1, 2, 5, 6, 8]

  arr1 = [9]
  arr2 = []
  arr2 is empty
  return result array concatenated with arr1 = [1, 2, 5, 6, 8, 9]

D
- Stick with arrays; build a new array one element at a time from the input arrays

A
- Create an empty result array
- Make a copy of the two input arrays
- Build the result array from the smallest of the first elements, shifting off an element each time it is selected, until both arrays are empty

- Create an empty result array
- Make a copy of the two input arrays
- Enter a loop (stopping condition?)
  - Check if either array is empty
    - If one is, find the array with elements (short circuit OR)
    - Return the result array, concatenated with the populated array
  - Check whether the element at the first index of the first array is less than or equal to that of the second array
    - If so,
      - Add the result of shifting off the first element of the first array to the results array
    - Otherwise,
      - Add the result of shifting off the first element of the second array to the results array
*/

function merge(arr1, arr2) {
  let sorted = [];
  arr1 = arr1.slice();
  arr2 = arr2.slice()

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  let populatedArr = arr1.length === 0 ? arr2 : arr1;
  return sorted.concat(populatedArr);
}

// the smallest element comes from the first array
// the largest element comes from the first array
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]

// the largest element comes from the second array
console.log(merge([1, 5, 9], [2, 6, 11]));      // [1, 2, 5, 6, 9, 11]

// the smallest element comes from the second array
console.log(merge([1, 5, 9], [0, 6, 8]));      // [0, 1, 5, 6, 8, 9]

// both arrays have repeated elements of their own
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]

// between the two arrays, there are repeated elements
console.log(merge([1, 2, 3], [1, 2]));         // [1, 1, 2, 2, 3]

// first arr is the empty array
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]

// second arr is the empty array
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// both arrays are empty
console.log(merge([], []));                    // []