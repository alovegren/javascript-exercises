const Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  const LOWER_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER_LETTERS = LOWER_LETTERS.toUpperCase();
  const NUMBERS = '0123456789'
  const ALL_CHARS = LOWER_LETTERS.concat(UPPER_LETTERS).concat(NUMBERS);

  const pickChar = () => {
    let seed =  Math.round(Math.random() * (ALL_CHARS.length - 1));
    let char = ALL_CHARS[seed];
    return char;
  }

  const anonymize = () => {
    let sequence = '';

    while (sequence.length < 16) {
      sequence = sequence.concat(pickChar());
    }

    return sequence;
  }

  function validate(input, token, successMessage = true) {
    return input === token ? successMessage : 'Invalid Password'
  }

  return {
    init(email, password, firstName, lastName) {
      userPassword  = password; // because the `init` function retains a closure over the variables declared on lines 2-5, they can act as 'private' variables
      userEmail     = email;
      userFirstName = firstName;
      lastName  = lastName;
      this.displayName = anonymize();
      return this;
    },

    email(password) {
      return validate(password, userPassword, userEmail);
    },

    firstName(password) {
      return validate(password, userPassword, userFirstName);
    },

    resetPassword(password, newPassword) {
      if (password === userPassword) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password'
      }
    },

    reanonymize(password) {
      if (password === userPassword) {
        this.displayName = anonymize(); // `displayName` is public, so we want it to be a property on the returned object
        return true;
      } else {
        return 'Invalid Password'
      }
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

console.log('---------------------------------------')

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'