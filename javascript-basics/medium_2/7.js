function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// first `anotherAnotherOne` is invoked on line 15. The following is logged to the console:

// Welcome

// within `anotherAnotherOne`, `anotherOne` is invoked with the arguments `116` and `111`. `anotherOne` makes use of rest/spread syntax, appending the string corresponding to the char code of each argument. this logs the following to the console:

// to

// on line 21, `anotherOne` is invoked again with the arguments `116`, `104` and `101`.

// the

// Finally, the function `anotherOne` is returned, and it is invoked with the arguments `77, `97`, `116`, `114`, `105`, `120` and `33`

// Matrix!