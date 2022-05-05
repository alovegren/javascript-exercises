function multisum(num) {
  let total = 0;

  for (let count = 1; count <= num; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) total += count;
  }

  return total;
}

console.log(multisum(3)    === 3);
console.log(multisum(5)    === 8);
console.log(multisum(10)   === 33);
console.log(multisum(1000) === 234168);