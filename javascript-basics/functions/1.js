var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
This code will log `'This is global'` to the console. On line 8, when the `console.log` method is called and passed a variable `myVar`, JavaScript searches the current scope-- the global scope-- for a variable named `myVar`. It finds the `myVar` declared and set on line 1.

It does not find the `myVar` declared and set on line 4 because that variable is out of scope; it was declared inside the definition of `someFunction`, so it is scoped to `someFunction`.
*/