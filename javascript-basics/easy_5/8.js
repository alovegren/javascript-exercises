function sequence(count, multiple) {
  let countSequence = []
  
  for (let i = multiple; countSequence.length < count; i += multiple) {
    countSequence.push(i);
  }

  return countSequence;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []