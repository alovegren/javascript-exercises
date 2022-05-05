/*
Given three numbers representing degrees,
  - Return one of four strings:
    - "acute" if all three numbers are less than 90
    - "right" if one number is exactly 90
    - "obtuse" if one number is greater than 90
    - "invalid" if the degrees would not make up a valid triangle.
      - if any number is 0, it is invalid
      - if the degrees do not add up to 180, it is invalid
- All numbers will be integers

Algorithm
Triangle validation
  - input: all three angles in an array
  - output: true (valid triangle) or false (invalid)
  - if some angle is 0, return false
  - check whether all angles sum to 180

- Validate the triangle: helper method
- If some angle is 90, return "right"
- If some angle is greater than 90, return "obtuse"
- Otherwise, Return "acute"
*/

function isValidTriangle(degreesArr) {
  if (degreesArr.some(degree => degree === 0)) return false;
  let totalDegrees = degreesArr.reduce((totalDegrees, degree) => {
    return totalDegrees + degree;
  });

  return totalDegrees === 180;
}

function triangle(...degrees) {
  if (!isValidTriangle(degrees)) return "invalid";
  
  if (degrees.some(degree => degree === 90)) return "right";
  if (degrees.some(degree => degree > 90)) return "obtuse";
  return "acute";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(70, 60, 50));       // "acute"
console.log(triangle(50, 60, 70));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(90, 0, 90));        // "invalid"
console.log(triangle(90, 90, 0));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"