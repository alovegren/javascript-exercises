const MIN_TO_MILLISECOND = 60000;
const MIN_PER_DAY = 60 * 24

function getHrsAndMins(str) {
  let HrsAndMins = str.split(':');
  return [Number(HrsAndMins[0]), Number(HrsAndMins[1])]
}

const newDateAtMidnight = () => {
  const ARBITRARY_DATE_AT_MIDNIGHT = '1/1/2000 00:00'

  let date = new Date(ARBITRARY_DATE_AT_MIDNIGHT);
  return date
}

function afterMidnight(str) {
  let [hrs, mins] = getHrsAndMins(str);
  let sinceMidnight = newDateAtMidnight();

  sinceMidnight.setHours(hrs);
  sinceMidnight.setMinutes(mins);

  return (sinceMidnight.getHours() * 60) + sinceMidnight.getMinutes();
}

function beforeMidnight(str) {
  let minutesSinceMidnight = MIN_PER_DAY - afterMidnight(str);

  if (minutesSinceMidnight === 1440) return 0;

  return minutesSinceMidnight;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686