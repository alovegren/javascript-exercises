function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

const newDateAtMidnight = () => {
  const ARBITRARY_DATE_AT_MIDNIGHT = '1/1/2000 00:00'

  let date = new Date(ARBITRARY_DATE_AT_MIDNIGHT);
  return date
}

function timeOfDay(minutesSinceMidnight) {
  const MIN_TO_MILLISECOND = 60000;
  let millisecondsSinceMidnight = minutesSinceMidnight * MIN_TO_MILLISECOND;

  let date = newDateAtMidnight();
  date.setMilliseconds(millisecondsSinceMidnight);

  let hours = formatTime(date.getHours());
  let minutes = formatTime(date.getMinutes());

  console.log(`${hours}:${minutes}`);
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"