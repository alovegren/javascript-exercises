/*
Problem
- Given three numbers (integers or floats), return one of four strings:
  - "equilateral" : the three numbers could be three sides of an equilateral triangle
    - all three sides are the same
  - "isosceles" : the three numbers could be three sides of an isosceles triangle
    - two sides are the same and the third side is different from the other two
  - "scalene" : the three numbers could be three sides of an scalene triangle
    - none of the sides have the same length
  - "invalid": the three numbers could not form a triangle
    - if the sum of two shorter sides is not greater than the longest side
    - all sides must be greater than 0

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 0, 3);        // "invalid"
triangle(3, 3, 0);        // "invalid"
triangle(3, 1, 1);        // "invalid"
triangle(.003, .004, .005)      // "isosceles"

Data structure
- access to the arguments array

Algorithm
- Helper function that checks whether the triangle is valid (input: array of triangle lengths)
    - Return false if any element of the array is 0
      - check if some value is zero
    - Sort the input array
    - Check whether the sum of the first two elements is greater than the last element (return true if this is true,  false otherwise)

input: [0, 3, 3] -> false because 0

input [3, 1, 1] -> sorted, becomes [1, 1, 3]
  - is 1 + 1 greater than 3? -> return false

- First check that the triangle is valid and then classify it
  - Return "invalid" if helper function returns false

  - Check whether all elements are the same
    - Declare a variable and initialize it to the first element
    - Return the string "equilateral" if the second element and the third element are equal to the first element
  
  - Check whether two elements are the same and the third is different
    - If the first two elements are the same OR the last two elements are the same, return 'isosceles'

  - Return 'scalene'

*/

function isValidTriangle(lengths) {
  if (lengths.some(length => length === 0)) return false;

  lengths.sort((a, b) => a - b);
  return lengths[0] + lengths[1] > lengths[2];
}

function triangle(length1, length2, length3) {
  if (!isValidTriangle([...arguments])) return "invalid";

  if (length1 === length2 && length2 === length3) return "equilateral";
  if (length1 === length2 || length2 === length3 || length1 === length3) {
    return "isosceles";
  }

  return 'scalene';cd
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 1.5, 3));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 0, 3));        // "invalid"
console.log(triangle(3, 3, 0));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(.3, .4, .5))      // "scalene"