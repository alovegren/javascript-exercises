function multiplyAllPairs(arr1, arr2) {
  let pairsMultiplied = [];

  arr1.forEach(elem1 => {
    arr2.forEach(elem2 => pairsMultiplied.push(elem1 * elem2));
  });

  return pairsMultiplied.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]