let bill = Number.parseFloat(prompt('What is the bill?\n'));
let percentage = Number.parseFloat(prompt('What is the percentage?\n'));

let tip = bill * .01 * percentage;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);