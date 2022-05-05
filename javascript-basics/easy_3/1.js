function getRandBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

// To generate a random integer in a certain range, we have to first define the size of the range by subtracting the lower bound from the upper bound. We add 1 to this size if we want the range to be inclusive.

// We then multiply the floating point number returned by `Math.random` (this is a number between 0 and 1) by the size of the range. The lowest number that can be returned is 0 and the highest is the size of the range. We then add the lower bound of the range to this product, shifting our range accordingly so that the lowest number that can be returned is the lower bound, and the highest number that can be returned is the upper bound. Finally, we truncate the digits following the decimal point by invoking `Math.floor`.

console.log(`Teddy is ${getRandBetween(20, 200)}!`)