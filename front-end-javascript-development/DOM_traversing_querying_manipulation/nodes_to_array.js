/* 
Continually map an array of parents to its children's tag names, packaging the children into a new array.

Create a two-element array where the first element is the tagname of document.body and the second array is the result of mapping doc.body to its children.
  If the nested array is not empty,
    Map each child in it to the same two element array
  Otherwise, 
    Return the constructed array

*/

function nodesToArr(parents = [document.body]) {
  return parents.map(parent => {
    let children  = Array.from(parent.children);
    let parentTag = parent.tagName;

    let newLevel = [parentTag, children];
    if (children.length === 0) return newLevel ;
    return [parentTag, nodesToArr(children)]; 
  });
}


// example1
console.log(nodesToArr());
// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// OR

// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]
// ]


// example 2
// ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]

// OR

// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", [
//     ["DIV", []],
//     ["DIV", []]]],
//   ["FOOTER",[]]]]


// example 3

// ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]

// OR

// ["BODY", [
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", [
//         ["DIV",[]]]]]],
//     ["DIV", []],
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", []],
//       ["DIV", []]]]]]