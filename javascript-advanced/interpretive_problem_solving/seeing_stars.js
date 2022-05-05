/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

star(7); 2 spaces between stars on first row
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9); 3 spaces between stars on first row
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

star(11) 4 spaces between stars on first row
*    *    * (first row has no leading spaces and 4 spaces between stars)
 *   *   *  (second row has 1 leading space, 3 spaces between stars)
  *  *  *   (third row has 2 leading space, 2 spaces between stars)
   * * *    (fourth row has 3 leading space, 1 spaces between stars)
    ***     (fifth row has 4 leading spaces, no spaces between stars)
*********** (sixth row has 11 stars)
    ***     (seventh row has 4 leading spaces, no spaces between stars)
   * * *    (eighth row has 3 leading space, 1 spaces between stars)
  *  *  *   (ninth row has 2 leading space, 2 spaces between stars)
 *   *   *  (tenth row has 1 leading space, 3 spaces between stars)
*    *    * (eleventh row has no leading spaces, 4 spaces between stars)

values of significance on each iteration (supposing we are iterating through the rows)
  - the leading spaces:
    - (n - total spaces between stars - 3 stars) / 2 -> leading spaces on every row but the center
  - the number of stars (3 or n)
  - the spaces between stars
    - on the first row, this value sets the initial values for the other values when qty stars is 3
    - n / 2 (integer division) - 1 = spaces between stars on the first row
    - spaces between stars * 2 = total spaces between stars

Rules
- If we think about the eight pointed star as consisting of a series of rows,
  - We notice that all but the center row contain three stars
  - The center row contains n stars
  - Number of stars in each row: 3, 3, 3, ... n ... 3, 3, 3

Algorithm
- Set initial values (include center value and nextToCenter?)

- Set increment value to 1
- Iterate from 1 to (n / 2) (center value), back down to 1
  - begin iteration with 1
  - if the current row is the center value or greater,
    - set increment value to -1
  - if the current row is the center row,
    - log n many '*'s
  - On each iteration, log the current row using a helper method

log row helper method:
- params: leading spaces, space between
- concatenate:
  leading spaces + * + space between stars + * + space between stars + *
*/

function getRowNumbers(n, centerValue) {
  let sequence = [];

  let incrementBy = 1;
  let rowNumber   = 1;

  while (sequence.length < n) {
    if (rowNumber >= centerValue) incrementBy = -1
    sequence.push(rowNumber);
    rowNumber += incrementBy;
  }

  return sequence;
}

function generateRow(leadingSpace, spaceBetween) {
  return ' '.repeat(leadingSpace) +
         ['*', '*', '*'].join(' '.repeat(spaceBetween));
}

function star(n) {
  let centerValue = Math.ceil(n / 2);
  let rowNumbers  = getRowNumbers(n, centerValue);

  rowNumbers.forEach(rowNum => {
    let rowDisplay;
    let leadingSpace = rowNum - 1;
    let spaceBetween = centerValue - 1 - rowNum;

    if (rowNum === centerValue) {
      rowDisplay = '*'.repeat(n);
    } else {
      rowDisplay = generateRow(leadingSpace, spaceBetween);
    }

    console.log(rowDisplay);
  });  
}

// values of significance on each iteration (supposing we are iterating through the rows)
//   - the leading spaces:
//     - (n - total spaces between stars - 3 stars) / 2 -> leading spaces on every row but the center
//   - the number of stars (3 or n)
//   - the spaces between stars
//     - on the first row, this value sets the initial values for the other values when qty stars is 3
//     - n / 2 (integer division) - 1 = spaces between stars on the first row
//     - spaces between stars * 2 = total spaces between stars


star(7);
star(9);
star(11);