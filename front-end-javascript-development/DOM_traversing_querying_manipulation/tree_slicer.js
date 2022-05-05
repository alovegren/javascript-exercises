function sliceTree(startId, endId) {
  let ID = endId;
  let nextElem = document.getElementById(ID);
  if (!nextElem) return undefined;

  let familyTree = [nextElem.tagName];

  while (nextElem && ID > 1 && ID > startId) {
    nextElem = nextElem.parentElement;
    ID = Number(nextElem.getAttribute('id'));
    familyTree.unshift(nextElem.tagName);
  }

  if (familyTree.length === 1 || ID !== startId) return undefined;
  return familyTree;
}

console.log(sliceTree(1, 4));
// ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// undefined
console.log(sliceTree(2, 5));
// undefined
console.log(sliceTree(5, 4));
// undefined
console.log(sliceTree(1, 23));
// ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// ["SECTION", "P", "SPAN", "STRONG", "A"]

/*

You basically have to select the branch that has the innermost child node, then trace it back to the start ID.

*/


// Create a new array 
// Get the element at the end id and push it to the new array

// iterate while the id is equal to or greater than 1 OR while the id is equal to or greater than the start ID
  // set nextParent equal to the parent of the current child
  // set id equal to nextParent's ID
  // push the new parent to the array (unshift)

// If the array is empty at the end of the iteration OR id does not equal start id, return undefined