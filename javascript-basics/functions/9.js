console.log(a);

var a = 1;

/*
This code will log `undefined` to the console. During the creation phase, JavaScript looks for function and variable declarations and hoists them to the top of the program. The hoisted version of this code would look like this:

var a;
console.log(a);

a = 1;

When `console.log` is called on line 1 and passed the value that `a` references, that value is `undefined`. Therefore, this is what is logged to the console.
*/