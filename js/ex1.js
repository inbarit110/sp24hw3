const number = Number(prompt("Enter a number:"));

if ((number > 1) && (number < 100)) {
  console.log(`Thank you! You entered ${number}, a valid number.`);
} else if ((number < 1) || (number < 100)) {
  console.log(`Sorry, ${number} is not a valid entry.`);
} else {
  console.log(`Sorry, ${number} is not a valid entry.`);
}

console.log("Cohen's Output from HW 3 Example 1");