//Connect all references by ID between HTML and Javascript.
function getElementById(id) {
  return document.querySelector('#' + id);
}

// Assign characters to corresponding strings.
var characterSets = {
  //Had to add "if" and capitalize first letter to make the for loop below work correctly. Unsure if naming structure is correct now.
  ifLowercase: 'abcdefghijklmnopqrstuvwxyz',
  ifUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ifNumerical: '0123456789',
  ifSpecial: '!"#$%&()*+,-./:;<=>?@[^_`{|}~',
}

// Builds an array of checkboxes.
var checkboxes = [ifLowercase, ifUppercase, ifNumerical, ifSpecial];

// Create a random string of characters based on user inputs.
function generatePassword(length) {
  var result = '';
  var chosenCharacters = '';

  // Sets which characters to allow in the random string.
  for (i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked) {
      chosenCharacters += characterSets[checkboxes[i].id];
    } else {
      chosenCharacters = chosenCharacters.replace(characterSets[checkboxes[i].id], '');
    }
  }

  // Picks random characters for the string.
  for (var i = 0; i < length; i++) {
    result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }

  // Returns an error if user selection is incorrect.
  if (ifLength.value < 8) {
    result = 'Too Short';
  } else if (ifLength.value > 128) {
    result = 'Too Long';
  } else if (result === '') {
    result = 'Selection Necessary';
  }

  return result;
}

// Write password to the #passwordText HTML element.
function writePassword() {
  var passwordLength = ifLength.value;
  var password = generatePassword(passwordLength);
  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener('click', writePassword);

//Show or hide the form.
function showForm() {
  if (questions.style.display === 'none') {
    questions.style.display = 'block';
  } else {
    questions.style.display = 'none';
  }
}

// Add event listener to form button.
formBtn.addEventListener('click', showForm);

// Copy password into user clipboard.
function copyPassword() {
  navigator.clipboard.writeText
    (passwordText.value);
}

// Add event listener to copy button.
copyBtn.addEventListener('click', copyPassword);