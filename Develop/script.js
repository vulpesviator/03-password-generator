// Assignment Code
var generateBtn = document.querySelector("#generate");

var appendix = {
  lowerCase: `abcdefghijklmnopqrstuvwxyz`,
  upperCase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
  numbers: `0123456789`,
  special: ` !\"#$%&\'()*+,-./:;<=>?@[]^_\`{|}~`,
};

function generatePassword() {
  /* WHEN I select GENERATE PASSWORD there is a prompt to determine LENGTH of the PASSWORD that is at least 8 and no more than 128 characters */
  var passwordLength = window.prompt(
    `Please enter the length for your password between "8" and "128"`
  );

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(
      `The length of your password has to be betwen the values of "8" and "128". Please try again.`
    );
    return generatePassword();
  }

  /* THEN there are prompts to confirm if I should include LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS  */
  var lowercase = window.confirm(
    `Would you like to use lowercase letters?\nClick OK for Yes and CANCEL for No.`
  );
  var uppercase = window.confirm(
    `Would you like to use uppercase letters?\nClick OK for Yes and CANCEL for No.`
  );
  var numbers = window.confirm(
    `Would you like to use numbers?\nClick OK for Yes and CANCEL for No.`
  );
  var special = window.confirm(
    `Would you like to use special characters?\nClick OK for Yes and CANCEL for No.`
  );

  /* IF loop determines which set of characters to use from the object 'appendix' */
  var charSet = "";
  if (lowercase) {
    charSet += appendix.lowerCase;
  }
  if (uppercase) {
    charSet += appendix.upperCase;
  }
  if (numbers) {
    charSet += appendix.numbers;
  }
  if (special) {
    charSet += appendix.special;
  }
  if (!charSet) {
    window.alert(`Please select at least one group of characters to use.`);
    return generatePassword();
  }

  /* WHEN all prompts are answers then a password is generated that matches my criteria from the prompts */
  var finalPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
