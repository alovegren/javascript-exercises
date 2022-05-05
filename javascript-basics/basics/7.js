const STR_NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function charToDigit(char) {
  let result = null;

  STR_NUMS.forEach(function(num, idx) {    
    if (char === num) {
      result = idx;
    }
  });

  return result;
}

function isNegative(characters) {
  return characters[0] === '-'
}

function stringToSignedInteger(str) {
  let characters = str.split('');
  let nums = [];
  let isNumNegative = isNegative(characters) ? 'negative' : null;
  if (isNumNegative || characters[0] === '+') {
    characters = characters.slice(1)
  };

  characters.forEach(function(char) {
    let result = charToDigit(char);
    if (result !== null) { nums.push(result) }
  })

  let number = nums.join('');
  return isNumNegative ? number * -1 : number;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100