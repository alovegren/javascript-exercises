// if a tag has a child, insert a line break
// otherwise, the opening and closing tags can be on the same line
// use an object to keep track of open/closed status?
// we can pop off children as they're used, then close a tag once no more children exist

// object e.g. { tag: "BODY", open: true, hasChildren: true, children: [] }
// step 1 traverse through nodes and create objects

function addOpeningTag(html, tag) {
  let openingTag = `<${tag.toLowerCase()}>`;
  return html.concat(openingTag);
}

function addLineBreak(html, indentation) {
  let spaces = ' '.repeat(indentation);
  return html.concat(`\n${spaces}`);
}

function addClosingTag(html, tag) {
  let openingTag = `<${tag.toUpperCase()}>`;
  return html.concat(openingTag);
}

function arrayToNodes(nodes) {
  let html = ''
  let closingTags = [];

  while (nodes.length > 0) {
    let tag = nodes.shift();

    let tagObject = {
      tag,
      open: true,
      hasChildren: (nodes[0].length > 0),
    }

    html = addOpeningTag(html, tag);

    if (tagObject.hasChildren) {
      html = addLineBreak(html)
    }

    nodes = nodes.flat(); 
  }
}

// Nested array of nodes
let nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

arrayToNodes(nodes);