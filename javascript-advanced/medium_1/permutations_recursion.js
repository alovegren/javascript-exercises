/*
Using recursion, write a function that returns all permutations of an array

Given an array, return a new array containing subarrays, which together comprise of all
possible permutations of elements from the original array.

e.g. [a, b, c] -> [[a, b, c], [a, c, b], // fixed a, produced the permutations of [b, c]
                   [b, a, c], [b, c, a], // fixed b  produced the permutations of [a, c]
                   [c, a, b], [c, b, a]] // fixed c  produced the permutations of [a, b]

                                                        [1] + permutations of [2, 3, 4]
e.g. [1, 2, 3, 4] -> fix 1: [[1, 2, 3, 4], [1, 2, 4, 3], [1, 2] + permutations of [3, 4]
                             [1, 3, 2, 4], [1, 3, 4, 2], [1, 3] + permutations of [2, 4]
                             [1, 4, 2, 3], [1, 4, 3, 2], [1, 4] + permutations of [2, 3]
                                                        [2] + permutations of [1, 3, 4]
                     fix 2:  [2, 1, 3, 4], [2, 1, 4, 3],
                             [2, 3, 1, 4], [2, 3, 4, 1],
                             [2, 4, 1, 3], [2, 4, 3, 1],
                                                        [3] + permutations of [1, 2, 4]
                     fix 3:  [3, 1, 2, 4], [3, 1, 4, 2],
                             [3, 2, 1, 4], [3, 2, 4, 1],
                             [3, 4, 1, 2], [3, 4, 2, 1],
                                                        [4] + permutations of [1, 2, 3]
                     fix 4:  [4, 1, 2, 3], [4, 1, 3, 2],
                             [4, 2, 1, 3], [4, 2, 3, 1],
                             [4, 3, 1, 2], [4, 3, 2, 1]]

e.g. [a, b] -> fix a + [b] -> [a, b]
               fix b + [a] -> [b, a]

Helper function: combine a first element with all given subarrays
  - iterate through the array of subarrays
  - unshift the first element to the beginning of each subarray

Given an array of size n,
  - Return the array if n is equal to 1

  - Iterate through the elements of the array, transforming each to a permutation wherein it is the first element
    - Fix the current element and add it to every array produced by
    - the return value of calling the function with an array of the remaining elements ---> return permutations of those remaining elements



given [a, b, c], an array of size 3,
  - iterate through [a, b, c]
    - fix a, return combine(a, permutations([b, c])) --------> [[a, b, c], [a, c, b]]
    ------> one level down
      - given [b, c], an array of size 2,
      - iterate through [b, c]: transform each element to their permutations
        1. fix b, combine(b, permutations([c])) ---> returns [c] ------> [b, c]
        ------> two levels down
        - given [c], an array of size 1,
        - return [c]
        2. fix c, return (c + permutations([b])) ---> returns [b] ------> [c, b]
        ------> two levels down
        - given [b], an array of size 1,
        - return [b]
      - the array is transformed to [[b, c], [c, b]]; return array
*/

function combineFirstWithRest(first, subarrays) {
  return subarrays.map(subarray => [first].concat(subarray));
}

function permutations(arr) {
  if (arr.length === 1) return arr;

  return arr.flatMap((fixed, fixedIdx) => {
    let remainingElements = arr.slice();
    remainingElements.splice(fixedIdx, 1);
    return combineFirstWithRest(fixed, permutations(remainingElements));
  });
}

console.log(permutations(['a', 'b', 'c']));
console.log(permutations([1, 2, 3, 4]));