const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]); // all elements in array1 are copied to array2
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
    // the references to strings in array1 whose first character is a `'C'` are changed to reference the uppercase version of those strings
  }
}

console.log(array2); // array2 is unchanged from line 5 because its references to its elements are distinct from those of array1's