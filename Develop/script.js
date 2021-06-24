// Variable that selects the DOM element for the button on the page
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // Alert to welcome user to generator
  window.alert("Welcome to Password Generator. Please follow the prompts to create criteria and generate your password.");
  
  //Prompt for password length and verify password length is between 8 and 128 characters.
  var passwordLength = window.prompt("Please enter the length of your password. Must be between 8 and 128 characters.");
  // If user input for password length is less than 8 or greater than 128, error message will be displayed and operation abandoned
  if (passwordLength <8 || passwordLength > 128) {
    window.alert("Error: value not between 8 and 128 characters. Please try again")
    return;
  }
  
  //Create character sets for each criteria (lowercase, uppercase, numeric, and special characters)
  lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numericCharacters = "0123456789";
  specialCharacters = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~'";

  // Alert letting user know what criteria will be asked for as well as letting them know at least one needs to be chosen
  window.alert("You will now be prompted for character types to include in your password. These include lowercase, uppercase, numeric and special characters. Please choose at least one option.");
 
  // Alerts asking what characters will be used and adding the specific character sets if chosen
  var lowercase = window.confirm("Would you like to include lowercase characters?");
  if (lowercase) {
    charSet = lowercaseCharacters;
  } else {
      charSet = "";
  }
  var uppercase = window.confirm("Would you like to include uppercase characters?");
  if (uppercase) {
    charSet = charSet + uppercaseCharacters;
  } else {
      charSet = charSet
  }
    var numeric = window.confirm("Would you like to include numeric characters?");
  if (numeric) {
    charSet = charSet + numericCharacters;
  } else {
    charSet = charSet
  }
  var special = window.confirm("Would you like to include special characters?");
  if (special) {
    charSet = charSet + specialCharacters;
  } else {
    charSet = charSet
  }
  
  // Alert and abondoning operation if no criteria chosen
  if (!lowercase && !uppercase && !numeric && !special) {
    window.alert("Error: no character set chosen. Please try again.");
    return;
  }
  
  // Creating and setting variable to a function that actually creates the password
  var passwordGenerator = function() {
    var password = "";
    for (var i = 0, n = charSet.length; i < passwordLength; ++i) {
        password += charSet.charAt(Math.floor(Math.random() * n));
    }
    return password;  
  }

  // Variable that selects DOM element
  var passwordText = document.querySelector("#password");
  // Sets passwordText variable to the password generated via the passwordGenerator function
  passwordText.value = passwordGenerator();

}

// Event listener to generate button that starts the operation
generateBtn.addEventListener("click", writePassword);