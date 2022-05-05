function swapLetters(word) {
  if (word.length === 1) return word;

  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];
  let middle = word.slice(1, -1);

  return lastLetter + middle + firstLetter;
}

function swap(words) {
  return words.split(' ').map(word => {
    return swapLetters(word);
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') === "ebcdA");
console.log(swap('a')   === "a");