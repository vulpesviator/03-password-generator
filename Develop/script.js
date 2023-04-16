// Assignment Code
var generateBtn = document.querySelector("#generate");

var appendix = {
  lowerCase: `abcdefghijklmnopqrstuvwxyz`,
  upperCase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  numbers: `0123456789`,
  special: ` !\"#$%&\'()*+,-./:;<=>?@[]^_\`{|}~`
};

function generatePassword() {
  /* WHEN I select GENERATE PASSWORD there is a prompt to determine LENGTH of the PASSWORD that is at least 8 and no more than 128 characters */
  var passwordLength = window.prompt(`Please enter the length for your password between "8" and "128"`);
  
  if (passwordLength < 9 || passwordLength > 129) {
    window.alert(`The value has to be the length of your password betwen the values of "8" and "128". Please try again.`);
    passwordLength = window.prompt(`Please enter the length of your password between "8" and "128"`);
  }

  var finalPassword = "";

  for (let i = 0; i < length; i++) {
    finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  /* THEN there are prompts to confirm if I should include LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS  */
  var lowercase = true;
  var uppercase = window.confirm(`Would you like to use uppercase letters?`);
  var numbers = window.confirm(`Would you like to use numbers?`);
  var special = window.confirm(`Would you like to use special characters?`);

  var charSet = "";
    // if (lowercase) {
    //   charSet = appendix.lowerCase;
    // } else if (uppercase) {
    //   charSet = appendix.uppercase;
    // } else if (numbers) {
    //   charSet = appendix.numbers;
    // } else if (special) {
    //   charSet = appendix.special;
    // } else if (lowercase && uppercase) {
    //   charSet = appendix.lowercase + appendix.uppercase;
    // }
    
    
    // else {
    //   window.alert(`Please choose at least one `)
    // }
  
  console.log(charSet);
  console.log(length);
  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(special);
  
  return finalPassword;
  
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