function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// The variable `greeting` is initialized to the function `randomGreeting`, not the return value of its invocation. This means the entire function declaration will be interpolated in place of `greeting` on line 17.

// If we fix that problem by adding `()` after `randomGreeting` on line 15, the element reference is still not being explicitly returned on line 7. That means that the `randomGreeting function always returns `undefined`, so all messages logged to the console will look like the following: `undefined, Hannah!` We can fix this by adding a `return` statement on line 7.