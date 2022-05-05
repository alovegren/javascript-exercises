function showMultiplicativeAverage(arr) {
  let totalProduct = arr.reduce((product, num) => {
    return product * num;
  }, 1);

  console.log((totalProduct / arr.length).toFixed(3));
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"