let sequence = num => {
  let sequence = [];

  for (let count = 1; count <= num; count += 1) {
    sequence.push(count);
  }

  return sequence;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]