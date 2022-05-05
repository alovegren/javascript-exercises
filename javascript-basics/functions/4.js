var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*
This code will log `'This is global'` to the console. Variables in the global scope can be accessed from inner scopes. The call to `console.log` does just this with respect to `myVar`, a globally-scoped variable.
*/