// Assignment Code
var generateBtn = document.querySelector("#generate");

var appendix = {
  upperCase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  lowerCase: `abcdefghijklmnopqrstuvwxyz`,
  numbers: `0123456789`,
  special: ` !\"#$%&\'()*+,-./:;<=>?@[]^_\`{|}~`
};



/* WHEN I select GENERATE PASSWORD there is a prompt to determine LENGTH of the PASSWORD that is at least 8 and no more than 128 characters
THEN there is a prompt to confirm if I should include LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS  */

function generatePassword() {
  var passwordLength = window.prompt(`Please enter the length for your password between "8" and "128"`);
  
  if (passwordLength <= 8 || passwordLength >= 128) {
    window.alert(`The value has to be the length of your password betwen the values of "8" and "128". Please try again.`);
    passwordLength = window.prompt(`Please enter the length of your password between "8" and "128"`)
  }
  
  var uppercase = window.confirm(`Would you like to use uppercase letters?`);
  var lowercase = window.confirm(`Would you like to use lowercase letters?`);
  var numbers = window.confirm(`Would you like to use numbers?`);
  var special = window.confirm(`Would you like to use special characters?`)
  
  console.log(length);
  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(special);
  
  var finalPassword = "";
  return finalPassword;
  /*
  
      for (var i = 0, n = appendix.length; i < appendix.length; i++) {
        finalPassword = appendix.charAt[Math.floor(Math.random() * n)];
      return finalPassword;
      }
  */

};

console.log(Number(length));


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



/* { upperCase: confirm(`Would you like uppercase letters?`),
                   lowerCase: confirm(`Would you like lower case letters?`),
                   numbers: confirm(`Would you like to use numbers?`),
                   special: confirm(`Would you like to use special characters?`)}
                   */