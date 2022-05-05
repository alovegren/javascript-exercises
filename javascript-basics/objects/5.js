const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined; myArray[-1] is unset

myArray[-1] = 'd'; // Add property to myArray where key is `'-1'` and value is `'d'`
myArray['e'] = 5; // Add property to myArray where key is `'e'` and value is `5`
myArray[3] = 'f'; // Add element `'f'` at index 3 of myArray

console.log(myArray[-1]); // => d
console.log(myArray['e']); // => 5
console.log(myArray); // => ['a', 'b', 'c', 'f', '-1': 'd', e: 5]
