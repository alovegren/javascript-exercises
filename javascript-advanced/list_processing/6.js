/*
- Initialize an empty array
- Iterate from 0 to the length of the given string
  - Take a slice of the given string from the current number in the iteration to the end of the string
  - Populate the array with all the leading substrings from that slice
- Flatten the array and return it
*/

function leadingSubstrings(str) {
  return str.split('')
            .map((_char, idx) => str.slice(0, idx + 1));
}

// function substrings(str) {
//   let substrings = []

//   for (let startIdx = 0; startIdx < str.length; startIdx += 1) {
//     substrings = substrings.concat(leadingSubstrings(str.slice(startIdx)));
//   }

//   return substrings;
// }

function substrings(str) {
  return [...str].flatMap((_char, idx) => leadingSubstrings(str.slice(idx)));
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]