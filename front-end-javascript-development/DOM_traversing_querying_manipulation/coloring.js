/*
Problem
Write a function that determines all members in a DOM tree "generation", and styles those members with the `.generation-color` class.

The desired generation is determined by a single Integer argument to the function.

A generation is defined as "a set of elements that are on the same level of indentation"

Take a simple example:

<article id="1">hi
  <p id="2">there</p>
  <p id="3">i'm
    <a href="#" id="4">hungry</a> 
  </p>
</article>

In this example, 

Generation 1 would be the set [article]
Generation 2 would be the set [p (id 2), p (id 3)]
Generation 3 would be the set [a]

Put in another way, a generation N is the set of all elements for which we need to drill down N times.

You could iterate through the top-level elements. All would have a generation of 1.

<article id="1">hi
  <p id="2">there</p>
  <p id="3">i'm
    <a href="#" id="4">hungry</a> 
  </p>
</article>
<article id="5">hi
  <p id="6">there</p>
  <p id="7">i'm
    <a href="#" id="8">hungry</a> 
  </p>
</article>

e.g. iterate through [article, article]

For each article, iterate through its children
  article -> [p, p]
    p
    p -> a
  article -> [p, p]
    p
    p -> a

Using the `walk` function, we increment by 1 each time `walk` is invoked recursively
Suppose we return `walk` from another function which stores the call count

We need some logic to get the generation number from any given element. You could just count how many times you have to access `parentElement` before getting body

The first generation in this example is the article element with an ID of 1
*/

// let MATRIARCH = document.getElementById(1);

// function getGenerationNum(node) {
//   let generationNum = 1;

//   while (node !== MATRIARCH) {
//     generationNum += 1;
//     node = node.parentElement;
//   }

//   return generationNum;
// }

// function walk(node, callback) {
//   callback(node);
//   for (let index = 0; index < node.children.length; index += 1) {
//     walk(node.children[index], callback);
//   }
// }

// function colorGeneration(n) {
//   let generation = [];

//   walk(MATRIARCH, node => {
//     if (getGenerationNum(node) === n) generation.push(node);
//   });

//   generation.forEach(node => {
//     node.classList.add('generation-color');
//   });
// }

function colorGeneration(targetGeneration) {
  let generation = 0;
  let parents = [document.body];
  let elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements) {
    color(elements);
  }
}

// function color(elements) {
//   elements.forEach(({classList}) => {
//     classList.add("generation-color");
//   });
// }

// function getAllChildrenOf(parents) {
//   return parents.map(({children}) => Array.prototype.slice
//                                                     .call(children))
//                                                     .reduce((collection, children) => collection.concat(children), []);
// }

// equivalent to:

function getAllChildrenOf(parents) {
  let childrenOfParents = parents.map(parent => {
    let children = parent.children;
    return Array.prototype.slice.call(children)
  });

  return childrenOfParents.reduce((collection, children) => {
    collection.concat(children);
  }, []);
}

// colorGeneration(1);
// colorGeneration(4);
colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);