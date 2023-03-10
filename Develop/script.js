// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defined the character sets for each type of character
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Defined a function to prompt the user for a password length between 8 and 128 characters
function getPasswordLength() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return getPasswordLength();
  }
  return length;
}

// Defined a function to prompt the user for the types of characters to include in the password
function getPasswordCriteria() {
  var lowercase = confirm("Include lowercase letters?");
  var uppercase = confirm("Include uppercase letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");
  return {
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };
}

// Defined a function to generate a random character from a given set of characters
function getRandomChar(chars) {
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

 




