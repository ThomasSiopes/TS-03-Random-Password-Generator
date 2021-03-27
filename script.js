// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Declarations & Validations
  var password = "";
  var charset = "";
  var length = prompt("Please choose a length for your password.\nIt must be between 8 and 128 characters, inclusively.");
  while(length < 8 || length > 128) {
    length = prompt("It must be between 8 and 128 characters inclusively.\nPlease enter a valid input.");
  }

  do {
    alert("The following will be a series of prompts regarding password criteria.\nAt least one of the following criteria must be confirmed before continuing.");
    if (confirmationPrompt("lowercase letters") == "Y") {
      charset = charset.concat("abcdefghijklmnopqrstuvwxyz");
    }

    if (confirmationPrompt("uppercase letters") == "Y") {
      charset = charset.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (confirmationPrompt("numbers") == "Y") {
      charset = charset.concat("0123456789");
    }
    
    if (confirmationPrompt("special characters") == "Y") {
      charset = charset.concat("!”#$%&’()*+,-./:;<=>?@[]^_`{|}~");
    }
  } while (charset == "");

  // Password Generation
  for(var index = 0; index < length; ++index) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}

function confirmationPrompt(context) {
  var output = prompt("Include " + context + "?\nType 'Y' for yes or 'N' for no.");
  while(output != "Y" && output != "N") {
    output = prompt("Invalid input.\nInclude" + context + "?\nType 'Y' for yes or 'N' for no.");
  }
  return output;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
