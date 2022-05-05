const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average(myArray));

// No. The user has not taken into consideration that array indices can only be positive integers. Negative integers will be considered keys of array objects, and the properties comprising of these keys and their values do NOT count toward the length of the array.

// The `sum` variable local to the `average()` function references `20` following the `for` loop on lines 8-10, because the for loop iterated through all keys of the object, including the negative integers. However, when `sum` is divided by the length of `myArray`, the return value is 10 because `array.length` evaluated to `2` not `4`.