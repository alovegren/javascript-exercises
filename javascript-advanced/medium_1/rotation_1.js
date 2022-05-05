/*
Problem
- Given an array,
- Return a **new** array where the last element is the first element in the original. In other words,
 rotate the first element to the end of the array

 - If an empty array or an array containing only one element is given, a copy of that array should be returned
- If a non-array argument is given, return `undefined`

[undefined, 5, 'hello'] -> [5, 'hello', undefined]

Algorithm
- If the argument is not an array, return undefined
- If the array is less than or equal to 1 in length, return a copy of the array

- Save the array's first element to a local variable
- Return a slice of the array from index 1 to the end, concatenated with the array's first element
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length <= 1) return array.slice();

  let firstElem = array[0];
  let rotated = array.slice(1)
  rotated.push(firstElem);

  return rotated;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray([undefined, 5, 'hello']));  // [5, 'hello', undefined]
console.log(rotateArray([true, 5, 'hello']));       // [5, 'hello', true]
console.log(rotateArray([[1, 2], 5, 'hello']) === ['hello', true, [1, 2]]);

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// 13 min