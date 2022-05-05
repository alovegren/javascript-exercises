let capitalizer = (match) => match.toUpperCase(); 

function wordCap(sentence) {
  sentence = sentence.toLowerCase()
  return sentence.split(' ')
                 .map(word => word.replace(/^./, capitalizer))
                 .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'