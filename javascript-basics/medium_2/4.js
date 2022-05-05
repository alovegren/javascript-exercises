function makeDoubler(caller) {
  return function (num) {
    console.log(`This function was called by ${caller}.`);
    return num + num;
  }
}

const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.