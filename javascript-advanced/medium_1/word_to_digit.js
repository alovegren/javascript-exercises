/*
Given a sentence string that may contain 'number words', return an altered version of the sentence:
  - The number words (e.g. 'one', 'two', etc.) should be replaced by digit characters (e.g. '1', '2', etc.)

Data Structure
- String (regexp)

Algorithm
- Create an array of number words that correspond to their index position
- Global match: replace any occurrence of the words 'one'...'nine' in the input string with their corresponding index in the array
*/

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(sentence) {
  let wordPattern = new RegExp(numberWords.join('|'), 'gi');

  return sentence.replace(wordPattern, match => numberWords.indexOf(match.toLowerCase()));
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('My address is Three one one nine Lucky Lane.'));
// "My address is 3 1 1 9 Lucky Lane."


// additional test cases
// case
// number appears as part of another string