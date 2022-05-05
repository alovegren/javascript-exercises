let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/*
This code will log `7` to the console.

We declare a variable `a` and initialize it to `7` on line 1.

On line 7, we invoke the function `myValue`, passing it the variable `a`. `myValue` is defined with one parameter, `b`. As a result, there exists a variable `b` scoped to `myValue`.

On line 4, `b` is assigned a new value, the result of incrementing its initial value (`7`, the Number referenced by `a`) by 10. At this point, `b` references the Number `17`.

Because we only changed the reference of the locally scoped variable `b`, our call to `myValue` had no effect on the value of `a`. So when, on line 8, we log its value to the console, we see the original `7` to which it was initialized.
*/