const name = prompt("Enter your first name:");
alert(`Hello, ${name}`);

const number = Number(prompt("Enter a number:"));
if ((number >= 0) && (number <= 30)) {
  console.log(`Your grade standing is ${number}: Freshman `);
} else if ((number >= 31) && (number <= 60)) {
  console.log(`Your grade standing is ${number}: Sophomore `);
} else if ((number >= 61) && (number <= 90)) {
  console.log(`Your grade standing is ${number}: Junior `);
} else if (number >= 91) {
  console.log(`Your grade standing is ${number}: Senior `);
} else {
  console.log(`Invalid number of units, try again! `);
}


console.log("Cohen's Output from HW 3 Example 2");