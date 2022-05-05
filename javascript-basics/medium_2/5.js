const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// We declare a local variable `array` with `const` and initialize it to an array containing three string elements. On line 3, we add a property to this array where the key is the string `'3.4'` and the value is the string `'Oranges'`.

// An array's length is always equal to the highest index present in the array plus one, but only positive integers are valid indices. Since the highest valid index is 2, the array's length is 3 (this is output on line 4).

// When, on line 5, we invoke the static method `Object.keys` and pass in the array as an argument, JavaScript returns a new array containing both the indices and the keys of any non-index properties. That array would look like this: `['0', '1', '2', '3.4']`. Since those keys are members of an Array, they each have indices 0-3. Since 3 is the highest index, the result of accessing the length property on this array is `4` (this is output on line 4)

// Another key (`'-2'`) is added to our array with the value `'Watermelon'`. Since `-2` is not a positive integer, it does not count towards `array`'s length which is still `3`. (This is output on line 8) It does, however, count towards the length of the new array returned by `Object.keys(array)` as explained in the last paragraph. This new length is `5`, and is output on line 9.