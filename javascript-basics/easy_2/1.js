function crunch(str) {
  let crunched = ''

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (str[i - 1] === char) continue;
    crunched += char;
  }

  return crunched;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba')           === "4abcabcba");
console.log(crunch('ggggggggggggggg')         === "g");
console.log(crunch('a')                       === "a");
console.log(crunch('')                        === "");