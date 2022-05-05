function wordSizes(sentence) {
  if (sentence === '') return {};
  
  letterCounts = {}

  let words = sentence.split(' ')

  words.forEach(word => {
    wordLength = String(word.length);

    if (Object.keys(letterCounts).includes(wordLength)) {
      letterCounts[wordLength] += 1
    } else {
      letterCounts[wordLength] = 1;
    }
  })

  return letterCounts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}