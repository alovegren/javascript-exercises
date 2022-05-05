let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/*
This code logs `7` to the console. By defining `myValue` with a parameter `a`, we are essentially declaring a new variable `a` scoped to `myValue`. This `a` shadows the one declared and initialized on line 1, so when we investigate the globally-scoped `a` using `console.log` on line 8, the value to which it was initialized is logged.

This is an example of variable shadowing.
*/