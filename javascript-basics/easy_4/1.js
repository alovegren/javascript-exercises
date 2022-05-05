const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_DEGREE = 60;

function padSingleDigit(num) {
  let numStr = String(num);
  return num < 10 ? `0${numStr}` : numStr;
}

function dms(float) {
  while (float < 0) {
    float = 360 + float;
  }
  
  if (float > 360) float %= 360;

  let degrees = Math.floor(float);
  let minutes = (float - degrees) * MINUTES_PER_DEGREE;
  let seconds = (minutes - Math.floor(minutes)) * SECONDS_PER_DEGREE;

  degrees = String(degrees);
  minutes = padSingleDigit(Math.floor(minutes));
  seconds = padSingleDigit(Math.floor(seconds));

  return `${degrees}°${minutes}'${seconds}"`;
}

console.log(dms(30)        == `30°00'00"`);
console.log(dms(76.73)     == `76°43'48"`);
console.log(dms(254.6)     == `254°35'59"`);
console.log(dms(93.034773) == `93°02'05"`);
console.log(dms(0)         == `0°00'00"`);
console.log(dms(360)       == `360°00'00"`);

console.log(dms(-1)   == `359°00'00"`);
console.log(dms(400)  == `40°00'00"`);
console.log(dms(-40)  == `320°00'00"`);
console.log(dms(-420) == `300°00'00"`);