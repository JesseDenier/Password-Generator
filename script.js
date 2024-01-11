//Connect references between HTML and Javascript.
var ifLength = document.querySelector("#ifLength");
var ifLowercase = document.querySelector("#ifLowercase");
var ifUppercase = document.querySelector("#ifUppercase");
var ifNumerical = document.querySelector("#ifNumerical");
var ifSpecial = document.querySelector("#ifSpecial");
var generateBtn = document.querySelector("#generate");
var formBtn = document.querySelector("#form");
var passwordText = document.querySelector("#password");
var questions = document.querySelector("#questions");

// Set possible characters and combinations.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "0123456789";
var special = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';

// Create a random string of characters.
function generatePassword(length) {
  var result = "";
  var chosenCharacters = "";

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

  for (var i = 0; i < length; i++) {
    result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
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