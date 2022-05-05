function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/*
This code will log `'This is global'` to the console. On line 2, a variable `myVar` is initialized as a property on the global object. This is so because the value of `myVar` is set without an explicit declaration (i.e. it is not declared with the let, var or const keywords)

Since `myVar` is available globally, the call to `console.log` executes without issue.
*/