// Parent nodes:

// The `div` with an `id` of `1`: 9 direct children, 12 indirect children
  // Child: empty text node

  // The `h1` with an `id` of `2`: 2 direct children, 1 indirect child
    // Child: text node whose content is `'Hello, '`

    // The `em` with an `id` of `3`: 1 direct child
      // Child: text node whose content is `'World'`

  // Child: empty text node

  // The `p` with an `id` of `4`: 3 direct children, 1 indirect child
    // Child: Text node whose content is `'Welcome to wonderland...'`

    // The `span` with an `id` of `5`: 1 direct child
      // Child: Text node whose content is `'awesome'`

    // Child: Text node whose content is `' place. '`

  // Child: empty text node

  // The `a`  with an `id` of `6`: 1 direct child, 1 indirect child

    // The `strong` with an `id` of `7`: 1 direct child
      // Child: Text node whose content is `'Enter'`

  // Child: empty text node

  // The `div` with an `id` of `8`: 1 direct child, 2 indirect children

    // The `p` with an `id` of `9`: 1 direct child, 1 indirect child

      // The `a` with an `id` of `10`: 1 direct child
        // Child: Text node whose content is `'Go back'`

  // Child: empty text node

function walk(node, callback) {
  callback();

  for (let idx = 0; idx < node.childNodes.length; idx += 1) {
    walk(node.childNodes[idx], callback);
  }
}
 
function getDescendantQtys(node) {
  let directChildrenCount = node.childNodes.length;
  let allChildrenCount = 0;

  let incrementer = () => {
    allChildrenCount += 1;
  };

  walk(node, incrementer);
  return [directChildrenCount, allChildrenCount - directChildrenCount - 1];
}

let one = document.body.querySelector('div');
let two = one.firstElementChild;
console.log(getDescendantQtys(one));
console.log(getDescendantQtys(two));