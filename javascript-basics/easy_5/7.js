let swapName = function(str) {
  [firstName, lastName] = str.split(' ');
  return `${lastName}, ${firstName}`;
}

// To allow for multiple first names:

swapName = function(str) {
  [firstName, ...otherNames] = str.split(' ');
  let lastName = otherNames.pop();

  let fullName = `${lastName}, `;
  fullName += `${firstName} `;

  for (let i = 0; i < otherNames.length; i += 1) {
    fullName += `${otherNames[i]} `
  }

  return fullName.trim();
}

// A succinct alternative from Bob Rodes

swapName = function(str) {
  let names = str.split(' ');
  return names.pop() + ', ' + names.join(' ');
}

console.log(swapName('Joe Carolina Thunderbolt Roberts'));    // "Roberts, Joe"

