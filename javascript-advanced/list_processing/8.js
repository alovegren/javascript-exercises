function nManyItems(item, n) {
  let items = []

  while (items.length < n) {
    items.push(item);
  }

  return items;
}

function buyFruit(list) {
  return list.flatMap(itemAndQty => nManyItems(...itemAndQty));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]