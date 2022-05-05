function countOccurrences(arr) {
  let counts = {}

  for (let idx = 0; idx < arr.length; idx += 1) {
    let vehicle = arr[idx];
    counts[vehicle] = counts[vehicle] || 0;
    counts[vehicle] += 1;
  }

  Object.keys(counts).forEach(vehicle => {
    console.log(`${vehicle} => ${counts[vehicle]}`)
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2