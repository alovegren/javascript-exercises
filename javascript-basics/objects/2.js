const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

/*
This code logs some representation of the two **object literal methods** `firstName` and `lastName` which are elements of the object referenced by `person`. The functions themselves are not called, so the output most probably desired (Victor Reyes) is not logged.

Because functions are first-class objects, we can return the function itself by referencing the name of the function without appending parentheses.
*/