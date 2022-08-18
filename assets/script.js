// Assignment code here
var passwordLength = window.prompt("How many characters do you want in your password? Min of 8 maximum of 128.");
var specialCharacter = window.confirm("Do you want to use special charaters?");
var lowerCase = window.confirm("Yes, include lower case in my password!");
var upperCase = window.confirm("Yes, include UPPER case in my password!");
var useNumbers = window.confirm("Yes, I want to add numbers in my password!");
var stringLower = "abcdefghijklmnopqrstuvwxyz";
var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()_+-=|\][{}':/?.>,<";
var password = "";
var character = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
