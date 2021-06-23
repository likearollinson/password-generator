// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  window.alert("Welcome to Password Generator. Please follow the prompts to create criteria and generate your password.");
  var passwordLength = window.prompt("Please enter the length of your password. Must be between 8 and 128 characters.");
  if (passwordLength <8 || passwordLength > 128) {
    window.alert("Error: value not between 8 and 128 characters. Please try again")
    return;
  }
  
  lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numericCharacters = "0123456789";
  specialCharacters = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~'";

  window.alert("You will now be prompted for character types to include in your password. These include lowercase, uppercase, numeric and special characters. Please choose at least one option.");
  var lowercase = window.confirm("Would you like to include lowercase characters?");
  if (lowercase) {
    charSet = lowercaseCharacters;
  } else {
      charSet = "";
  }
  // window.alert(charSet);
  var uppercase = window.confirm("Would you like to include uppercase characters?");
  if (uppercase) {
    charSet = charSet + uppercaseCharacters;
  } else {
      charSet = charSet
  }
  // window.alert(charSet);
    var numeric = window.confirm("Would you like to include numeric characters?");
  if (numeric) {
    charSet = charSet + numericCharacters;
  } else {
    charSet = charSet
  }
  // window.alert(charSet);
  var special = window.confirm("Would you like to include special characters?");
  if (special) {
    charSet = charSet + specialCharacters;
  } else {
    charSet = charSet
  }
  // window.alert(charSet);
  if (!lowercase && !uppercase && !numeric && !special) {
    window.alert("Error: no character set chosen. Please try again.");
    return;
  }
  

  var passwordGenerator = function() {
    var password = "";
    // window.alert(password)
    for (var i = 0, n = charSet.length; i < passwordLength; ++i) {
        password += charSet.charAt(Math.floor(Math.random() * n));
        // window.alert(password);  
    }
    return password;  
  }

  
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordGenerator();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);