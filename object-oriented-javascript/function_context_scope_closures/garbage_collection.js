function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// will the value referenced by `array` be garbage collected?
// more code

/*
No. The variable `pushIt` still references the anonymous function returned by `makeArrays`, which references `array` via closure.
*/