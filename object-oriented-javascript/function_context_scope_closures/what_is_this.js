/*
NaN.

`this` is bound to the global object any time it is found outside of a function. Since `this` appears as part of an expression but not inside a function on line 4, the attempts to access the values referenced in the object by `firstName` and `lastName` return `undefined`. When we add the two together, type coercion causes the return value to be `NaN`.
*/