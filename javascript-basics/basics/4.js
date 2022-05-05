// let name = 'Bob';
// const saveName = name;
// name = 'Alice';
// console.log(name, saveName); // logs Alice Bob

const name = 'Bob';
const saveName = name;
name.toUpperCase(); // this returns a new string `"BOB"` but nothing is done with its return value
console.log(name, saveName); // should log `Bob Bob`