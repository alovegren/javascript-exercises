function newStack() {
  const stack = [];

  return {
    push(newVal) {
      stack[stack.length] = newVal;
    },

    pop() {
      let popped = stack[stack.length - 1];
      stack.length = stack.length - 1;
      return popped;
    },

    printStack() {
      stack.forEach(item => console.log(item));
    },
  }
}