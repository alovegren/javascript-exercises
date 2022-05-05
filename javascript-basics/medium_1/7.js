function invoiceTotal() {
  let sum = 0;
  
  for (let idx = 0; idx < arguments.length; idx += 1) {
    sum += arguments[idx]
  }
  
  return sum;
}

// alternatively

function invoiceTotal(...lineItems) {
  let sum = 0;
  
  for (let idx = 0; idx < arguments.length; idx += 1) {
    sum += lineItems[idx]
  }
  
  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?