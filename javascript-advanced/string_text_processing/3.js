function letterCaseCount(str) {
  let lowerChars = str.match(/[a-z]/g) || [];
  let upperChars = str.match(/[A-Z]/g) || [];
  let lowerCount = lowerChars.length;
  let upperCount = upperChars.length;
  let neitherCount = str.length - lowerCount - upperCount;

  return { lowerCount, upperCount, neitherCount };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }