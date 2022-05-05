/*
P
Given an array of purely string elements or purely number elements,
  - Return the array in sorted order,
  - Making use of the merge sort algorithm
    - Merge sort is recursive
    - It works by breaking down the input array into progressively smaller subarrays until this results in single element arrays
    - The arrays are then merged back together in sorted order in the same order in which they were split up
    
E
splitting arrays up:
[9, 5, 7, 1] --> [[9, 5], [7, 1]] --> [[[9], [5]], [[7], [1]]]

merge them back together
first, merge [9] and [5] in order --> [5, 9]
then merge [7] and [1] -------------> [1, 7]
merge [5, 9] and [1, 7] ----------------------> [1, 5, 7, 9]

** odd number of elements **
splitting arrays up:
[1, 2, 4, 6, 7] --> [[1, 2, 4], [6, 7]] --> [[1, 2], [4]], [[6, 7]] -->
[[[[1], [2]], [[4]]], [[[6], [7]]]]

merge them back together: [[[1], [2]], [[4]]] and [[6], [7]]]
1. [[[1], [2]], [[4]]]
[[1], [2]] and [[4]]
first merge [1] and [2] together -----> [1, 2]
then merge [1, 2] and [4] together -------------> [1, 2, 4]

2. [[6], [7]]]
merge [6] and [7] together -----------> [6, 7]

merge [1, 2, 4] and [6, 7] together -----------------------------> [1, 2, 4, 6, 7]

D
Stick with arrays

A

e.g. [9, 5, 7, 1]

mergeSort([9, 5, 7, 1])

- input array is not a single element
- split the array in half --> [9, 5] and [7, 1]
  merge(mergeSort([9, 5]), mergeSort([7, 1])) ---> [1, 5, 7, 9]

  mergeSort([9, 5])
  - input array is not a single element
  - split the array in half --> [9] and [5]
  - merge(mergeSort([9]), mergeSort([5])) ---> [5, 9]
    
    mergeSort([9])
    - input array contains a single element ---> [9]
    
    mergeSort([5])
    - input array contains a single element ---> [5]
  
  mergeSort([7, 1]) -------------------------> [1, 7]
  
e.g. mergeSort([6, 2, 7, 1, 4])

- input array contains more than one element
- split the array in half --> [6, 2, 7] and [1, 4]
  merge(mergeSort([6, 2, 7], mergeSort([1, 4]))
  
  mergeSort([6, 2, 7])
    - input array contains more than one element
    - split the array in half --> [6, 2] and [7]
    - merge(mergeSort([6, 2]), mergeSort([7]))
      ---> merge([2, 6], [7]) --> [2, 6, 7]
    
      mergeSort([6, 2])
        - input array contains more than 1
        - split the array in half --> [6] and [2]
        - merge(mergeSort([6]), mergeSort([2])) ---> merge([6], [2]) --> [2, 6]
        
          mergeSort([6]) ----> return [6]
          mergeSort([2]) ----> return [2]
      
      mergeSort([7]) ---> return [7]
  
  
  mergeSort([1, 4])
  
- If the input array is a single element, return the array
- Split the array in half, careful of arrays with odd lengths**
  - Save a slice of the array from the first element to the index that is the ceiling of the length/2
- Merge the return value of calling the function recursively for each half, using the merge() function

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

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  
  let midpoint = Math.ceil(arr.length / 2);
  
  let firstHalf = arr.slice(0, midpoint);
  let secondHalf = arr.slice(midpoint);
  
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]