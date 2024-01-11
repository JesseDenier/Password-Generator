//Connect all references between HTML and Javascript.
var generateBtn = document.querySelector("#generate");
var formBtn = document.querySelector("#form");
var passwordText = document.querySelector("#password");
var questions = document.querySelector("#questions");
var ifLength = document.querySelector("#ifLength");
var ifLowercase = document.querySelector("#ifLowercase");
var ifUppercase = document.querySelector("#ifUppercase");
var ifNumerical = document.querySelector("#ifNumerical");
var ifSpecial = document.querySelector("#ifSpecial");

// Set strings based on character selection.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "0123456789";
var special = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';

// Create a random string of characters based on user inputs.
function generatePassword(length) {
  var result = "";
  var chosenCharacters = "";

  // Sets which characters to allow in the random string.
  if (ifLowercase.checked) {
    chosenCharacters += lowercase;
  }
  else {
    chosenCharacters = chosenCharacters.replace(lowercase, "");
  }
  if (ifUppercase.checked) {
    chosenCharacters += uppercase;
  }
  else {
    chosenCharacters = chosenCharacters.replace(uppercase, "");
  }
  if (ifNumerical.checked) {
    chosenCharacters += numerical;
  }
  else {
    chosenCharacters = chosenCharacters.replace(numerical, "");
  }
  if (ifSpecial.checked) {
    chosenCharacters += special;
  }
  else {
    chosenCharacters = chosenCharacters.replace(special, "");
  }

  // Picks random characters for the string.
  for (var i = 0; i < length; i++) {
    result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }

  // Returns an error if user selection is incorrect.
  if (ifLength.value < 8) {
    result = "Too Short";
  }
  if (ifLength.value > 128) {
    result = "Too Long";
  }
  if (result === "") {
    result = "Selection Necessary";
  }

  return result;
}

// Write password to the #password input.
function writePassword() {
  var passwordLength = ifLength.value;
  var password = generatePassword(passwordLength);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Show or hide the form.
function showForm() {
  if (questions.style.display === "none") {
    questions.style.display = "block";
  }
  else {
    questions.style.display = "none";
  }
}

// Add event listener to form button
formBtn.addEventListener("click", showForm);