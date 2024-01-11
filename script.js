//Connect references between HTML and Javascript.
var ifLength = document.querySelector("#ifLength");
var generateBtn = document.querySelector("#generate");
var formBtn = document.querySelector("#form");
var passwordText = document.querySelector("#password");

// Declare all possible characters.
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[^_`{|}~'

// Create a random string of characters.
function generatePassword(length) {
  let result = ' ';
  var charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
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