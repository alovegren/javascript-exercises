function myBind(func, context, ...outerArgs) {
  return function(...args) {
    return func.apply(context, outerArgs.concat(args));
  }
}

function add(a, b) {
  return a + b;
}

let addFive = myBind(add, null, 5);
console.log(addFive(10));