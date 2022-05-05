const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length); //The highest index in the `languages` array at this point is 2, so the length output is 3.

languages.length = 4; // the length property is adjusted to 4. JavaScript fills the empty slots with unset elements
console.log(languages);
console.log(languages.length);

languages.length = 1; // the array is shortened such that its highest index is 0. This means elements 2-4 are deleted
console.log(languages);
console.log(languages.length); // since the highest index is 0, the length is 1

languages.length = 3; // the array is lengthened by setting the array property. empty slots fill in the spaces left in indices 1 and 2
console.log(languages); 
console.log(languages.length); // we set the length property to 3, so it is 3

languages.length = 1;
languages[2] = 'Python'; // we insert an element at index 2, leaving an empty item at index 1
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

/* 

output:
line 2: ['JavaScript', 'Ruby', 'Python']
line 3: 3
line 6: ['JavaScript', 'Ruby', 'Python', <1 empty item>]
line 7: 4
line 10: ['JavaScript']
line 11: 1
line 14: ['JavaScript', <2 empty items>]
line 15: 3
line 19: ['JavaScript', <1 empty item>, 'Python']
line 20: undefined
line 21: 3

*/