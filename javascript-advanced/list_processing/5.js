/*
list processing abstraction
Given an array of characters, iterate through them and
 - transform each character to a substring of the original string from index 0 to the current index
*/

function leadingSubstrings(str) {
  return str.split('')
            .map((_char, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]