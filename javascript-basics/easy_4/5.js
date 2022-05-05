function interleave(arr1, arr2) {
  let interleaved = []

  for (let i = 0; i < arr1.length; i += 1) {
    interleaved.push(arr1[i], arr2[i]);
  }

  return interleaved;
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]