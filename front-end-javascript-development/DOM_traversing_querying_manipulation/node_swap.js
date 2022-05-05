function walk(node, callback) {
  callback(node);

  for (let idx = 0; idx < node.children.length; idx += 1) {
    walk(node.children[idx], callback);
  }
}

function aDescendantOfB(a, b) {
  let isDescendant = false;

  walk(b, node => {
    if (Array.from(node.children).includes(a)) {
      isDescendant = true;
    }
  });

  return isDescendant;
}

function invalidSwap(a, b) {
  return !a
         || !b
         || aDescendantOfB(a, b)
         || aDescendantOfB(b, a);
}

function nodeSwap(idA, idB) {
  let elemA = document.getElementById(idA);
  let elemB = document.getElementById(idB);

  if (invalidSwap(elemA, elemB)) return undefined;

  let elemACopy = elemA.cloneNode(true);
  let elemBCopy = elemB.cloneNode(true);

  elemA.parentElement.replaceChild(elemBCopy, elemA);
  elemB.parentElement.replaceChild(elemACopy, elemB);

  return true;
}

// invalid
// at least one of the id attributes doesn't exist
console.log(nodeSwap(1, 20)); // undefined

// at least one of the nodes is a "child" of the other
console.log(nodeSwap(1, 4)); // undefined
console.log(nodeSwap(9, 3)); // undefined

// // valid
// // one swap
// console.log(nodeSwap(1, 2)); // true

// // multiple swaps
console.log(nodeSwap(3, 1)); // true
console.log(nodeSwap(7, 9)); // true