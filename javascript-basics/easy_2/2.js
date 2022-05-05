function createRows(str, width) {
  let borderRow = '+-' + '-'.repeat(width) + '-+';
  let padRow = '| ' + ' '.repeat(width) + ' |';

  return [borderRow, padRow];
}

function truncateStr(str, maxWidth) {
  let rows = [];
  let lastLinePad = maxWidth - (str.length % maxWidth);
  let qtyRows = Math.ceil(str.length / maxWidth);

  for (let charIdx = 0; charIdx < str.length; charIdx += maxWidth) {
    let line = str.slice(charIdx, charIdx + maxWidth);
    if (rows.length < (qtyRows - 1)) {
      rows.push('| ' + line + ' |');
    } else {
      rows.push('| ' + line + ' '.repeat(lastLinePad) + ' |');
    }
  }

  return rows;
}

function logInBox(str, maxWidth) {
  let HORIZONTAL_PAD = 4;
  let CONTENT_WIDTH = maxWidth - HORIZONTAL_PAD;

  [borderRow, padRow] = createRows(str, CONTENT_WIDTH);
  let allRows = truncateStr(str, CONTENT_WIDTH);

  [padRow, borderRow].forEach(row => {
    allRows.unshift(row);
    allRows.push(row);
  });

  allRows.forEach(row => console.log(row));
}

logInBox('Nub is a nubby nub who takes sunshine naps twice a day', 65);