function shortLongShort(str1, str2) {
  [long, short] = str1.length > str2.length ? [str1, str2] : [str2, str1];
  return short.concat(long).concat(short);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"