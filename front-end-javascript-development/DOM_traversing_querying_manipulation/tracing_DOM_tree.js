function getSiblingTags(node) {
  let id = Number(node.getAttribute('id'));
  if (id === 1) return [node.tagName];

  let siblings = Array.from(node.parentNode.children);
  return siblings.map(node => node.tagName);
}

function domTreeTracer(id) {
  let currentElement = document.getElementById(id);
  let tree = [getSiblingTags(currentElement)];

  while (id !== 1) {
    currentElement = currentElement.parentNode;
    id = Number(currentElement.getAttribute('id'));
    tree.push(getSiblingTags(currentElement));
  }

  return tree;
}

console.log(domTreeTracer(1));
// [["ARTICLE"]]
console.log(domTreeTracer(2));
// [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22));
// [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]

// create a collection

// while the current ID is not 1
  // reassign the current element to its parent
  // reassign the id to the id of the current element
  // populate a new array with the tag name of the element with the current ID, along with the tagname of its siblings
  // append this array to the collection created on line 12

// return the collection