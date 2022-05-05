/*
Given a template (a data structure of my choosing), return a string wherein the template is filled out with words selected from various categories.
  - The categories are nouns, verbs, adjectives, and adverbs
  - The words from each category should be selected randomly
    - The output of the function should (most likely) be different on each call, given the same template

Data Structure
1. Template data structure options:
  - object where keys label the words to be replaced
  - String with specially indicated words that we can use regexp to replace in our function

The __noun__ __verb__ the __noun__'s __verb__.

2. Object to store properties:
  - Wherein the key is the name of the part of speech
  - The value is an array of words of that part of speech

Algorithm
1. Create my templates using the format on line 12
2. Create an object to map the name of each part of speech to its words
  - Sort object keys in random order
  - Helper function 2b (return a new array of the same object keys in a different order)

3. Iterate through each set of words (adjectives, nouns, verbs, adverbs)
  - (By iterating through the object keys)
  - Invoke a helper method to mutate the template string, passing in the current key name and the template string, replacing all relevant parts of the template with the current parts of speech

3a. Replacer function: accepts a template and the name of the current part of speech
  - Construct the pattern that will enable a match with the current part (e.g. 'noun' -> '__noun__')
  - Iterate through the array of words for the current part (for loop so I can return early)
    - If there is no match, return from the function
    - For the current word, replace the next instance of the match (e.g. __noun__) with the current word
  - ** side effects, no meaningful return value **

2b. Helper function: sort array in random order
- Create a new array
- Iterate while the new array is less than the original length of the given array
  - Generate a random number between 0 and 1, multiply it by the current length of the input array, take the ceiling to generate an index
  - Add the element from the input array at the generated index to the new array. (Mutate the input array)
*/

const template1 = "The __adjective__ brown __noun__ __adverb__ __verb__ the __adjective__ yellow __noun__, who __adverb__ __verb__ his __noun__ and looks around."
const template2 = "The __noun__ __verb__ the __noun__'s __verb__."

function randomize(words) {
  let randomized = [];
  let targetLength = words.length;

  while (randomized.length < targetLength) {
    let sourceIdx = Math.floor(Math.random() * words.length);
    randomized.push(words.splice(sourceIdx, 1)[0]);
  }

  return randomized;
}

function madlibs(template) {
  const partsOfSpeech = {
    adjective: randomize(['quick', 'lazy', 'sleepy', 'noisy', 'hungry']),
    noun: randomize([ 'fox', 'dog', 'head', 'leg', 'tail', 'cat' ]),
    verb: randomize([ 'jumps', 'lifts', 'bites', 'licks', 'pats' ]),
    adverb: randomize([ 'easily', 'lazily', 'noisily', 'excitedly' ]),
  }

  let replaceWords = (partOfSpeech) => {
    let pattern = `__${partOfSpeech}__`

    for (let idx = 0; idx < partsOfSpeech[partOfSpeech].length; idx += 1) {
      let words = partsOfSpeech[partOfSpeech];
      if (!template.match(pattern)) return;
      template = template.replace(pattern, words[idx]);
    }
  };

  Object.keys(partsOfSpeech).forEach(partOfSpeech => replaceWords(partOfSpeech));
  return template;
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// The (adjective) brown (noun) (adverb)
// (verb) the (adjective) yellow (noun),
// who (adverb) (verb) his (noun) and
// looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

// The (noun) (verb) the (noun)'s (verb).

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".