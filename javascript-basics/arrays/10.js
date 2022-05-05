function createTally(arr) {
  let arrMap = {};

  for (let idx = 0; idx < arr.length; idx += 1)  {
    let elem = String(arr[idx]);
    if (Object.keys(arrMap).includes(elem)) {
      arrMap[elem] += 1;
    } else {
      arrMap[elem] = 1;
    }
  }

  return arrMap;
}

function testEachIncludes(arr1, arr2) {
  let result = true;
  
  arr1.forEach(elem => {
    if (!arr2.includes(elem)) result = false;
  });

  arr2.forEach(elem => {
    if (!arr1.includes(elem)) result = false;
  });

  return result;
}

function areArraysEqual(array1, array2) {
  if (!testEachIncludes(array1, array2)) return false;

  let arr1Map = createTally(array1);
  let arr2Map = createTally(array2);
  let arr1Elems = Object.keys(arr1Map);
  let arr2Elems = Object.keys(arr2Map);

  if (array1.length !== array2.length) return false;

  for (let idx = 0; idx < arr1Elems.length; idx += 1) {
    let arr1Key = arr1Elems[idx];
    if (arr1Map[arr1Key] !== arr2Map[arr1Key]) return false
  }

  return true
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])             === true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])             === true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3])           === false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])       === true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])       === false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])       === false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])             === false);
console.log(areArraysEqual([1, 1, 1], [1, 1])                === false);
console.log(areArraysEqual([1, 1], [1, 1])                   === true);