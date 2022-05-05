function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  }
}

let obj = {
  name: 'Missy', 
  age: 27,
}

function getName() {
  console.log(this.name);
}

let getMissyName = myBind(getName, obj);
