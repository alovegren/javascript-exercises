let rLSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;
const METER_INPUTS = ['meters', 'm'];
const FEET_INPUTS = ['feet', 'ft'];
const VALID_INPUTS = METER_INPUTS.concat(FEET_INPUTS);
const INVALID_INPUT_MSG = 'Sorry, please enter "m" ' +
                          'for meters or "ft" for feet.';

let length = Number.parseFloat(rLSync.question('How long is the room? '));
let width  = Number.parseFloat(rLSync.question('How wide is the room? '));
let area   = (length * width).toFixed(2);

rLSync.setDefaultOptions({
  limit: VALID_INPUTS,
  limitMessage: INVALID_INPUT_MSG
});

let unit = rLSync.question('Which unit should we work with? Meters (m) or' +
' feet? (ft) ').toLowerCase();

unit = FEET_INPUTS.includes(unit) ? unit = 'feet' : unit = 'meters';
console.log(`You selected ${unit}.`);

console.log(`The area of the room is ${area} square ${unit}.`);