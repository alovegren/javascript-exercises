let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail

// None of the lines are terminated with semicolons. Maybe JS thinks the array on line 3 is part of the assignment on line 1?

// It does. It thinks we're trying to access elements of an empty string, which returns undefined. Empty strings do not contain a `forEach` property.