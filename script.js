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

// Create a random string of characters based on user inputs.
function generatePassword(length) {
  // Builds an array of checkboxes, and sets results to empty.
  var checkboxes = [ifLowercase, ifUppercase, ifNumerical, ifSpecial];
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

function showForm() {
  // Establishes all variable names as HTML element tags.
  var body = document.body;
  var questionsEl = document.createElement("form");
  var lengthEl = document.createElement("p");
  var passwordLengthEl = document.createElement("input");
  var ifLowercaseEl = document.createElement("input");
  var lowercaseEl = document.createElement("p");
  var ifUppercaseEl = document.createElement("input");
  var uppercaseEl = document.createElement("p");
  var ifNumericalEl = document.createElement("input");
  var numericalEl = document.createElement("p");
  var ifSpecialEl = document.createElement("input");
  var specialEl = document.createElement("p");

  // Sets text content of "p" elements.
  lengthEl.textContent = "Password Length: ";
  lowercaseEl.textContent = "Lowercase";
  uppercaseEl.textContent = "Uppercase";
  numericalEl.textContent = "Numerical";
  specialEl.textContent = "Special";

  // Establises order and parent/child relationship of HTML elements.
  body.appendChild(questionsEl);
  questionsEl.appendChild(lengthEl);
  questionsEl.appendChild(passwordLengthEl);
  questionsEl.appendChild(ifLowercaseEl);
  questionsEl.appendChild(lowercaseEl);
  questionsEl.appendChild(ifUppercaseEl);
  questionsEl.appendChild(uppercaseEl);
  questionsEl.appendChild(ifNumericalEl);
  questionsEl.appendChild(numericalEl);
  questionsEl.appendChild(ifSpecialEl);
  questionsEl.appendChild(specialEl);

  // Sets CSS and HTML attributes to all elements.
  questionsEl.setAttribute("style", "position:fixed; top:20%; left:50%; transform:translate(-50%, -50%); z-index: 9999; background-color: red");
  lengthEl.setAttribute("style", "display: inline");
  passwordLengthEl.setAttribute("type", "number");
  passwordLengthEl.setAttribute("id", "ifLength");
  passwordLengthEl.setAttribute("style", "min:8; max:128; value:8");
  ifLowercaseEl.setAttribute("type", "checkbox")
  ifLowercaseEl.setAttribute("id", "ifLowercase")
  ifUppercaseEl.setAttribute("type", "checkbox")
  ifUppercaseEl.setAttribute("id", "ifUppercase")
  ifNumericalEl.setAttribute("type", "checkbox")
  ifNumericalEl.setAttribute("id", "ifNumerical")
  ifSpecialEl.setAttribute("type", "checkbox")
  ifSpecialEl.setAttribute("id", "ifSpecial")
}

// Add event listener to form button.
formBtn.addEventListener('click', showForm);