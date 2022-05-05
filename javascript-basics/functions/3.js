var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
This code will log `'This is local'` to the console. In this example, only one variable `myVar` exists and it is globally-scoped. It was declared and initialized on line 1, and reassigned on line 4. Since variables declared on outer scopes are accessible from within inner scopes, JavaScript treats the code on line 4 as reassignment.
*/