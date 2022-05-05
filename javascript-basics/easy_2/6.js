let rLSync = require('readline-sync');

let noun = rLSync.question('Enter a noun: ');
let verb = rLSync.question('Enter a verb: ');
let adjective = rLSync.question('Enter a adjective: ');
let adverb = rLSync.question('Enter a adverb: ');

console.log(`The ${adjective} ${noun} ${verb} ${adverb}...`);
