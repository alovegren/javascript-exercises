/*
We'll get some sort of reference error from this code because we are trying to
reference local variables `name`, `morning`, `afternoon` and `evening` within the
`greet` method. No such local variables exist* in the scope of the function or on
outer scopes. In order to access the object property `name`, which is probably
what the programmer intended, we need to prepend each occurrence of `name` with `this.`.

*The alternate solution works because `name` is also a local variable scoped to
the function. This is because it is passed into the function at invocation, and
when that happens, JavaScript declares a new local variable in the current scope
with a constructor, initializing the local variable to the value of the argument.
*/