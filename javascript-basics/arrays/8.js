let adjustValue = (value, max) => Math.min(value, max);

function slice(array, begin, end) {
  let length = array.length;
  [begin, end] = [adjustValue(begin,length), adjustValue(end,length)];

  let newSlice = [];
  for (let idx = begin; idx < end; idx += 1) {
    newSlice.push(array[idx]);
  }

  return newSlice;
}

// The values of begin and end will always be integers greater than or equal to 0.
// If the value of begin or end is greater than the length of the array, set it to equal the length.

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

/*
Given an array, a start index, and a delete count, return the same array wherein a quantity of elements equal to the delete count is removed from the array, beginning with the element corresponding to the start index.

If any additional arguments are specified, they should be added in place of the deleted elements.

The elements removed should be returned by the function.

// start can be at most the length of the array
// deleteCount can be at most the length of the array minus the start
*/

function splice(array, start, deleteCount, ...elements) {
  start = adjustValue(start, array.length);
  deleteCount = adjustValue(deleteCount, array.length - start);

  let removedElems = []
  let arrayCopy = slice(array, 0, array.length);

  const newLength = array.length - deleteCount + elements.length;
  array.length = newLength;

  for (let i = 0; i < elements.length; i += 1 ) {
    array[start + i] = elements[i];
  }

  let restoreCount = arrayCopy.length - (start + deleteCount);
  for (let count = 0; count < restoreCount; count +=1) {
    array[count + start + elements.length] = arrayCopy[count + start + deleteCount];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3]; // arr: [1, 3] -> after shifting elems: [1, 1, 3]
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]