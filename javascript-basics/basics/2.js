const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // this should log `'Hello'`
}

if (!myString) {
  console.log('World'); // nothing will be logged to the console because `myString` is truthy. Preceding a truthy value with the bang operator will coerce it to the boolean false.
}

if (!!myArray) {
  console.log('World'); // `myArray` will be coerced to `true` by the double bang operator. So `'World'` will be logged to the console. 
}

if (myOtherString || myArray) {
  console.log('!'); // since myArray evaluates to `true`, the entire condition will return a truthy value. Therefore, `'!'` will be logged to the console.
}