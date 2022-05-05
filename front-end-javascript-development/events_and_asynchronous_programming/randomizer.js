function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let count = 0;
  let finalCount = 2 * callbacks.length;

  let counter = setInterval(() => {
    count += 1;
    console.log(count);

    if (count >= finalCount) {
      clearInterval(counter);
    }
  }, 1000);

  let randomInterval = () => {
    let seed = Math.random();
    return (Math.floor((seed * finalCount) + 1)) * 1000;
  }

  callbacks.forEach(callback => {
    setTimeout(callback, randomInterval());
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6