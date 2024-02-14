function validateInput(hours, minutes, seconds) {
  // Check if the input values are within valid range

  if (
    isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
    hours < 0 || hours > 23 ||
    minutes < 0 || minutes > 59 ||
    seconds < 0 || seconds > 59
  ) {
    return false;
  }
  return true;
}
function displayTime(hours, minutes, seconds) {
  return `${hours}h${minutes}m${seconds}s`;
}

function incrementTime(hours, minutes, seconds) {
  // Increment time by one second
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;

      if (hours === 24) {
        hours = 0;
      }
    }
  }
  return [hours, minutes, seconds];
}

function displayNextSecond(hours, minutes, seconds) {
  [hours, minutes, seconds] = incrementTime(hours, minutes, seconds);
  return `One second later: ${displayTime(hours, minutes, seconds)}`;
}

function main() {
  let hours, minutes, seconds;
  hours = parseInt(prompt("Enter hours:"));
  minutes = parseInt(prompt("Enter minutes:"));
  seconds = parseInt(prompt("Enter seconds:"));

  // Validation
  if (!validateInput(hours, minutes, seconds)) {
    console.log("Invalid input.");
    return;
  }

  // Output
  console.log("Time input:", displayTime(hours, minutes, seconds));
  console.log(displayNextSecond(hours, minutes, seconds));
}
main();

console.log("Cohen's Output from HW 3 Example 7");