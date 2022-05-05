function makeStaggerer() {
  let staggerUpper = true;
  
  return function(char) {
    if (staggerUpper && /[a-zA-Z]/.test(char)) {
      staggerUpper = false;
      return char.toUpperCase();
    } else if (/[a-zA-Z]/.test(char)) {
      staggerUpper = true;
      return char.toLowerCase();
    } else {
      return char;
    }
  }
}

function staggeredCase(str) {
  return str.split('').map(makeStaggerer()).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"