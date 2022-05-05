function repeater(str) {
  let newStr = ''

  for (let strIdx = 0; strIdx < str.length; strIdx += 1) {
    let char = str[strIdx];
    newStr += char += char;
  }

  return newStr;
}

console.log(repeater('Hello')     === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('')          === "");