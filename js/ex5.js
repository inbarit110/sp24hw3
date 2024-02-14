let tries = 0;
let secretPassword;

prompt("What is the password?");

while (secretPassword !== "secret" && tries !=3){
  secretPassword = prompt("Incorrect password. Please try again")
  tries++;
  
  if(secretPassword !=="secret" && tries ===3){
    alert("Incorrect password! You are now locked out")
  } else {
    alert("Correct password")
  }
}

console.log("Cohen's Output from HW 3 Example 5");