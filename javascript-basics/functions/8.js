let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/*
This code will log `[1, 2, 10]` to the console.

When we invoke `myValue` with `a` as an argument, the object referenced by `a` is mutated because element reassignment is mutating. We recall that objects are compound values, not primitive ones. This means that they are mutable, and element reassignment is one operation that exemplifies this.
*/