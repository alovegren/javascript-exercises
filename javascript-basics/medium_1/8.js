function productOfSums(array1, array2) {
  let result = total(array1) * total(array2); // undefined * undefined will return NaN
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // undefined plus an integer will return NaN
  }

  sum; // without an explicit return statement, total() will return undefined
}

console.log(productOfSums([1, 2], [3, 4]));