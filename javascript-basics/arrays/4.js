function elementAdder(baseArr, elements) {
  for (let idx = 0; idx < elements.length; idx += 1) {
    baseArr.push(elements[idx]);
  }

  return baseArr;
}

function concat(array1, ...arguments) {
  let merged = elementAdder([], array1);
  
  arguments.forEach(arg => {
    if (!Array.isArray(arg)) arg = [arg];
    merged = elementAdder(merged, arg);
  });

  return merged;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        
// [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               
// [1, 2, "three", 4]