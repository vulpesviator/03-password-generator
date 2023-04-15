// Assignment Code
var generateBtn = document.querySelector("#generate");

var appendix = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  // symbols: " !"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
};

/* WHEN I select GENERATE PASSWORD there is a prompt to determine LENGTH of the PASSWORD that is at least 8 and no more than 128 characters
THEN there is a prompt to confirm if I should include LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS  */

function generatePassword() {
  var length = window.prompt(`Input a length for your password between "8" and "128"`),
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      finalPassword = "";
      for (var i = 0, n = charset.length; i < length; i++) {
        finalPassword += charset.charAt(Math.floor(Math.random() * n));
      return finalPassword;
      }
  
  
  /*
  var generatePassword = "";
  var passwordLength = window.prompt("Input a length between 8 and 128");

  if (passwordLength >= 8 && passwordLength <= 128) {
    var totalPassword = passwordLength * (appendix.numbers[Math.floor(Math.random() * appendix.length)]);
    console.log(totalPassword);
  } else {
    window.alert("Please choose a number between 8 and 128.");
  }
  console.log(passwordLength);
  var finalPassword = generatePassword.slice(0, length);
  return finalPassword;
  */
};

// 
/* WHEN all prompts are answers then a password is generate that matches my criteria from the prompts */

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*
var passwordLength = generateBtn.addEventListener("click", e => {
  window.prompt("Input a length between 8 and 128")
})

console.log(passwordLength);
*/