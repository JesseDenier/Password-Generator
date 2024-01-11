//Connect all references between HTML and Javascript.
function getElementById(id) {
  return document.querySelector("#" + id);
}

// Set strings based on character selection.
var characterSets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numerical: "0123456789",
  special: '!"#$%&()*+,-./:;<=>?@[^_`{|}~',
}


// Create a random string of characters based on user inputs.
function generatePassword(length) {
  var result = "";
  var chosenCharacters = "";

  // Sets which characters to allow in the random string.
  if (ifLowercase.checked) {
    chosenCharacters += characterSets.lowercase;
  }
  else {
    chosenCharacters = chosenCharacters.replace(characterSets.lowercase, "");
  }
  if (ifUppercase.checked) {
    chosenCharacters += characterSets.uppercase;
  }
  else {
    chosenCharacters = chosenCharacters.replace(characterSets.uppercase, "");
  }
  if (ifNumerical.checked) {
    chosenCharacters += characterSets.numerical;
  }
  else {
    chosenCharacters = chosenCharacters.replace(characterSets.numerical, "");
  }
  if (ifSpecial.checked) {
    chosenCharacters += characterSets.special;
  }
  else {
    chosenCharacters = chosenCharacters.replace(characterSets.special, "");
  }

  // Picks random characters for the string.
  for (var i = 0; i < length; i++) {
    result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }

  // Returns an error if user selection is incorrect.
  if (ifLength.value < 8) {
    result = "Too Short";
  } else if (ifLength > 128) {
    result = "Too Long";
  } else if (result === "") {
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

/* Copy password into clipboard */
function copyPassword() {
  navigator.clipboard.writeText
    (passwordText.value);
}

// Add event listener to copy button
copyBtn.addEventListener("click", copyPassword);