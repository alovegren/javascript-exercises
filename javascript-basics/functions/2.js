var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*
This code will log the string `'This is local'` to the console. This time, the `console.log` call occurs within the body of `someFunction()`. Again, JS looks for a variable with the name `myVar` in the current scope. This time, the current scope is the inner scope that was created by `someFunction`. So the variable declared on line 4 is retrieved. 

The variable `myVar` declared on line 1 is also in scope, but it is shadowed by the `myVar` declared on line 4. When resolving variable names, JavaScript will prioritize those in the current scope over those in surrounding scopes. 
*/