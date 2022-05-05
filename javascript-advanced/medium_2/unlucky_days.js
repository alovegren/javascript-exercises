/*
Given a number greater than 1752, return another number that represents the quantity of Friday the 13ths in that year

e.g. In the year 1986, there was one Friday whose date was 13 -> return 1

Data structures
- Date object

Algorithm
Option 1:
- Find the first friday of January using the date object, in the year given
- Iterate through the remaining Fridays of the year
  - If any of those Fridays have a day value of 13 (13th in the month),
    - Add 1 to a count
- Return the count

Option 2:
- Start a count of unlucky days
- Find the 13th of January using the date object, in the year given
- Iterate through the remaining months in the year, landing on a 13th of the month each time
  - If any of those days are Friday,
    - Friday's date index is 5
    - Add 1 to a count
- Return the count

*/

function fridayThe13ths(year) {
  let unluckyDays = 0;
  
  let currentMonth = 0;
  let current13th = new Date(`01/13/${String(year)}`);

  while (currentMonth < 12) {
    if (current13th.getDay() === 5) unluckyDays += 1;
    
    currentMonth += 1;
    current13th.setMonth(currentMonth);
  }
  
  return unluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
// can I look for a leap year?

// LS' solution:

function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}

// was using reduce a good idea? I think as written, the ternary statement is confusing. expanding to...

return thirteenths.reduce((count, day) => {
  return day.getDay() === 5 ? (count + 1) : count;
), 0};

// I'd eliminate the magic number. Still, I think using a variable to track the number of 13ths might be a little clearer.