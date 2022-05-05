function stripSpecialChars(word) {
  let nonAlphabetic = /[^a-zA-Z]/
  return word.replace(nonAlphabetic, '');
}

function wordSizes(sentence) {
  letterCounts = {}
  let words = sentence.split(' ')

  words.forEach(word => {
    word = stripSpecialChars(word);
    wordLength = String(word.length);

    if (word) {
      letterCounts[wordLength] = letterCounts[wordLength] || 0
      letterCounts[wordLength] += 1
    }
  })

  return letterCounts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}