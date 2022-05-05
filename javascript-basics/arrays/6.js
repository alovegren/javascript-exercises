function reverseArray(arr) {
  let reversed = [];
  
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    reversed.push(arr[idx]);
  }

  return reversed;
}

function reverse(inputForReversal) {
  const isArray = Array.isArray(inputForReversal);
  
  if (!isArray) {
    inputForReversal = inputForReversal.split('');
  }

  let reversedArr = reverseArray(inputForReversal);
  if (isArray) return reversedArr;
  return reversedArr.join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]

[a, b, c, d]

// when i is 0, length - i is 4
//      i is 1, length - i is 3
//      i is 2, length - i is 2
//      i is 3, length - i is 1