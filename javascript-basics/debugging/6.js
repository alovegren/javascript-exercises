const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// The `var` declaration on line 15 doesn't reset the value of `newSpecies` on each iteration; it is essentially ignored after it is executed on the first iteration because `var` variables have function scope. That means the declaration is hoisted to the top of the `transform` function and disregarded on line 15. So when `index` is equal to `1`, `3` and `5`, `newSpecies` still references the same value it referenced after line 18 on the previous iteration.

// We can fix this issue by declaring `newSpecies` with `let`.