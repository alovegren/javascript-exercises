function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// Caroline is using the abstract equality operator on line 5, and the last input array on line 15 contains the number `0`. When `0` is compared for equality with `false` using the abstract equality operator, the comparison will evaluate to `true`. So line 6 is executed and the function returns `true` when it should return `false`.