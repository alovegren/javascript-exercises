function union(arr1, arr2) {
  let combined = arr1.slice();

  arr2.forEach(elem => {
    if (!combined.includes(elem)) combined.push(elem)
  });

  return combined;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]