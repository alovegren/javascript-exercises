function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();

  for (let idx = 0; idx < obj1Keys.length; idx += 1) {
    let obj1Key = obj1Keys[idx];
    let obj2Key = obj2Keys[idx];

    if (obj1Key !== obj2Key || obj1[obj1Key] !== obj2[obj2Key]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false