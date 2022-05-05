function reverseLong(word) {
  if (word.length >= 5) {
    return word.split('').reverse().join('');
  } else {
    return word
  }
}

function reverseWords(str) {
  let words = str.split(' ');
  return words.map(word => reverseLong(word)).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"