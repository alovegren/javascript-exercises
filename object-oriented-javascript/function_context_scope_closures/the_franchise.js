const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

/*
Expected return value:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

Nested functions do not inherit the value of `this` from their enclosing functions. The value of `this` on line 5 in the original code is therefore the global object.

We could also pass an arrow function to `map`.
*/