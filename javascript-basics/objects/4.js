const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'

// Line 11 uses bracket notation to access the value of the property whose key is equal to the evaluation of the expression `prop2`.

// Line 12 uses the dot operator to access the value of the property whose key is the string literal `'prop2'`.

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}
// The function `myFunc()` is hoisted above line 19, so it can be successfully evaluated to `funcProp`; `funcProp` then becomes the key of a property of `myObj` with the value `'hello, '` on line 19.

console.log(myObj);
// => { 'funcProp': 'hello, ' }

myObj[myFunc()] = 'world!';
// The key equivalent to the return value of `myFunc()`, `'funcProp'` is reassigned to a new value of `'world!'`.
console.log(myObj);
// => { 'funcProp': 'world!' }