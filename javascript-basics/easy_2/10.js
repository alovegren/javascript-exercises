function getSuffix(century) {
  let lastDigit = century % 10;
  let lastTwoDigits = century % 100;

  if (lastTwoDigits <= 13 && lastTwoDigits > 10) return century + 'th';

  switch (lastDigit) {
    case 1: return century + 'st';
    case 2: return century + 'nd';
    case 3: return century + 'rd';
    default: return century + 'th';
  }
}

function century(year) {
  centuryNumber = Math.ceil(year / 100);
  return getSuffix(centuryNumber);
}

console.log(century(2000)  === "20th");
console.log(century(2001)  === "21st");
console.log(century(1965)  === "20th");
console.log(century(256)   === "3rd");
console.log(century(5)     === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052)  === "11th");
console.log(century(1127)  === "12th");
console.log(century(11201) === "113th");

/*


helper method

if the century is between 10 and 13 (inclusive), add a 'th'
otherwise, add a 'st' if century % 10 is 1
               a 'nd' if century % 10 is 2
               a 'rd' if century % 10 is 3
otherwise, add a 'th'

// 1st
// 2nd
// 3rd
4th
5th
6th
7th
8th
9th

10th
11th
12th
13th
14th
15th
16th
17th
18th
19th
20th

// 21st
// 22nd
// 23rd

24th

// 31st
// 32nd
// 33rd

34th

*/