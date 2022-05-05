function shift(arr) {
  let firstElem = arr[0];

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    arr[idx] = arr[idx + 1]
  }

  arr.length = Math.max(arr.length - 1, 0);
  return firstElem;
}

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

/*
Given an array and one or more elements, add the new elements to the beginning of the array and return the new length of the array.

e.g. unshift(['a', 'b', 'c', 'd'], 'hippo', 'meow') -> 4
     new array is ['hippo', 'meow', 'a', 'b', 'c', 'd']

We have to start shifting at the end of the arr
We can write a function to shift all existing elements to the right once
Then call the function as many times as there are arguments passed

the last elem is at arr.length - 1 (starting idx)
this elem should be pushed to arr.length
this should occur as many times as there are originally elements, or until the length of the array is its original length plus the qty of elems
e.g. first iteration: ['a', 'b', 'c', 'd', *'d'*] idx = arr.length
                      ['a', 'b', 'c', *'c'*, 'd'] idx = arr.length - 1
                      ['a', 'b', *'b'*, 'c', 'd'] idx = arr.length - 2
                      ['a', *'a'*, 'b', 'c', 'd'] idx = arr.length - 3 = 1
*/

function shiftElemsOnce(arr) {
  for (idx = arr.length; idx > 0; idx -= 1) {
    arr[idx] = arr[idx - 1];
  }

  return arr;
}

function unshift(arr, ...elems) {
  let newLength = arr.length + elems.length

  while (arr.length < newLength) {
    shiftElemsOnce(arr);
  }

  for (let idx = 0; idx < elems.length; idx += 1) {
    arr[idx] = elems[idx];
  }

  return arr.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]