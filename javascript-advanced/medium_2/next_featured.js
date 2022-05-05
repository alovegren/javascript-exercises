/*
Problem
Given a number, return another number
  - That number is the next featured number
    - A featured number is odd,
    - It is a multiple of 7,
    - It has no repeating digits
  - If the number itself is featured, we still want to return the next featured number
- The largest possible featured number is 9876543201 

Examples
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029

Algorithm

Helper function: check if an array of elements has any repeating elements
  - Create an object to store a count of each element
  - Iterate through the elements,
    - If the element is present as a key in the object, return true
    - Otherwie, we'll add a property wherein the key is the element and the value is 1
  - Return false if no duplicate elements were detected

Helper function: check whether a number is featured
  - return false if the number is even
  - coerce the number to a string and check whether there are any repeating digits
    - invoke the helper function to check whether there are repeating digits; if it returns true, this function returns false
  - otherwise, return true

Helper function: find the next multiple of 7

Main algo
- Save the largest possible featured number to a constant
- Check whether the given number is larger than the highests possible featured number and if so, return the error message

- Advance to the next multiple of 7
- Begin iterating at this multiple, incrementing by 7 each time
  - If the current number is a featured number, return it  

*/

function hasRepeatingElements(arr) {
  let elements = {};
  let hasRepeating = false;
  
  arr.forEach(element => {
    elements[element] ? hasRepeating = true : elements[element] = 1;
  });
  
  return hasRepeating;
}

function isFeatured(number) {
  if (number % 2 === 0) return false;
  if (hasRepeatingElements(String(number).split(''))) return false;
  return true;
}

function getNextMultipleOf7(number) {
  while (true) {
    number += 1;
    if (number % 7 === 0) return number;
  }
}

function featured(number) {
  const largestFeatured = 9876543201;
  if (number >= largestFeatured) return "There is no possible number that fulfills those requirements.";
  
  let nextMultiple = getNextMultipleOf7(number);
  
  while (true) {
    if (isFeatured(nextMultiple)) return nextMultiple;
    nextMultiple += 7;
  }
}

console.log(featured(-8));           // -7
console.log(featured(0));            // 7
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."