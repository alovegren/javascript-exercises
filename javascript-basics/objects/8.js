// function penultimate(string) {
//   return string.split(' ')[-2];
// }

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

// On line 2, we are attempting to reference the penultimate element in the array returned by `Array.prototype.split`, thinking that providing a negative index will search the array from backwards to forwards. In JavaScript, however, Arrays are objects. This means that any string can act as an object key, but only strings representing positive integers will act as array indices. If a negative key is provided when we attempt to reference an array element, JavaScript thinks you are accessing an unset key and will return `undefined`. We can fix this code by determining the positive integer which is the index for the penultimate element:

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

// or

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
