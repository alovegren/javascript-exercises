function triangle(int) {
  for (let starQty = 1; starQty <= int; starQty += 1) {
    spaceQty = int - starQty;
    console.log(' '.repeat(spaceQty) + '*'.repeat(starQty));
  }
}

triangle(5);
triangle(9);