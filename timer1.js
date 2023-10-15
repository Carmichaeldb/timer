/**
 * takes numbers from console
 * uses the numbers to create alarms
 * no number = no alarm
 * not a number = skip
 * negtive number = skip
 */

let time = process.argv;
for (let x = 1; x < time.length; x++) {
  if (isNaN(time[x])) {
    //do nothing
  } else if (time[x] <= 0) {
    //do nothing
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time[x] * 1000);
  }
}