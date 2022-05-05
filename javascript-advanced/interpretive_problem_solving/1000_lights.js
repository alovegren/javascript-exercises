/*

if we think about the bank of switches as being 0 indexed...

  0 1 2 3 4
  . . . . .
1 + + + + + - for each pass number, we want to toggle every nth switch
2 + . + . + - toggle every 2nd
3 + . . . + - toggle every 3rd
4 + . . + +
5 + . . + .

lightsOn(3)

  . . .
1 + + +
2 + . +
3 + . .

lightsOn(4)
  . . . .
1 + + + +
2 + . + .
3 + . . .
4 + . . +

Data Structure
- object of integer keys (start with 1) and boolean values (iterate through the array of object keys n many times, toggle each nth value)

Algorithm
- Create a new object with n many properties where the key is an integer between 1 and n and the value is false
- Iterate through the round numbers (iterate as many times as there are rounds = n)
  - transform the object using object reference
    - if the round number is a factor (divides evenly) of the index (object key),
      - toggle it (set the value for the current key equal to the opposite of its current value)
- from the array of object keys, select the keys whose properties are `true`

*/

function createSwitches(n) {
  let bank = {}
  
  for (let switchNumber = 1; switchNumber <= n; switchNumber += 1) {
    bank[switchNumber] = false;
  }

  return bank;
}

function lightsOn(switches) {
  let bank = createSwitches(switches);

  for (let roundNumber = 1; roundNumber <= switches; roundNumber += 1) {
    Object.keys(bank).forEach(switchNumber => {
      let currentState = bank[switchNumber];
      if (switchNumber % roundNumber === 0) bank[switchNumber] = !currentState;
    });
  }

  return Object.keys(bank).filter(switchNumber => bank[switchNumber]);
}

console.log(lightsOn(0)); // []
console.log(lightsOn(1)); // [1]
console.log(lightsOn(3)); // [1]
console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]