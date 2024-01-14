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

  // Deletes the form HTML so process can be repeated.
  var elementToRemove = document.getElementById("questions");
  elementToRemove.remove();

  return result;
}

// Write password to the #passwordText HTML element.
function writePassword(event) {
  var passwordLength = ifLength.value;
  var password = generatePassword(passwordLength);
  passwordText.value = password;
}

function showForm() {
  // Checks if Form has already been created.
  var existingForm = document.querySelector("#questions");
  if (existingForm) {
    return;
  }

  // Establishes all variable names as HTML element tags.
  var body = document.body;
  var questionsEl = document.createElement("form");
  var lengthEl = document.createElement("p");
  var ifLengthEl = document.createElement("input");
  var lengthRulesEl = document.createElement("p");
  var ifLowercaseEl = document.createElement("input");
  var lowercaseEl = document.createElement("p");
  var ifUppercaseEl = document.createElement("input");
  var uppercaseEl = document.createElement("p");
  var ifNumericalEl = document.createElement("input");
  var numericalEl = document.createElement("p");
  var ifSpecialEl = document.createElement("input");
  var specialEl = document.createElement("p");
  var confirmSelectionsEl = document.createElement("button");
  var lengthDiv = document.createElement("div");
  var lowercaseDiv = document.createElement("div");
  var uppercaseDiv = document.createElement("div");
  var numericalDiv = document.createElement("div");
  var specialDiv = document.createElement("div");


  // Sets text content of "p" elements.
  lengthEl.textContent = "Password Length: ";
  lengthRulesEl.textContent = "Min=8, Max=128";
  lowercaseEl.textContent = "Lowercase";
  uppercaseEl.textContent = "Uppercase";
  numericalEl.textContent = "Numerical";
  specialEl.textContent = "Special";
  confirmSelectionsEl.textContent = "Confirm Selections";

  // Establises order and parent/child relationship of HTML elements.
  body.appendChild(questionsEl);
  questionsEl.appendChild(lengthDiv);
  lengthDiv.appendChild(lengthEl);
  lengthDiv.appendChild(ifLengthEl);
  questionsEl.appendChild(lengthRulesEl);
  questionsEl.appendChild(lowercaseDiv);
  lowercaseDiv.appendChild(ifLowercaseEl);
  lowercaseDiv.appendChild(lowercaseEl);
  questionsEl.appendChild(uppercaseDiv);
  uppercaseDiv.appendChild(ifUppercaseEl);
  uppercaseDiv.appendChild(uppercaseEl);
  questionsEl.appendChild(numericalDiv);
  numericalDiv.appendChild(ifNumericalEl);
  numericalDiv.appendChild(numericalEl);
  questionsEl.appendChild(specialDiv);
  specialDiv.appendChild(ifSpecialEl);
  specialDiv.appendChild(specialEl);
  questionsEl.appendChild(confirmSelectionsEl);

  // Sets CSS and HTML attributes to all elements.
  questionsEl.setAttribute("style", "display: flex; flex-direction: column; align-items: center; justify-content: center; position: fixed; top: 100px; left: 50%; transform: translate(-50%); z-index: 9999; background-color: hsl(0, 0%, 100%); border-radius: 5px; border-width: 1px; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px; color: hsl(206, 17%, 28%); font-size: 18px; margin: 0 auto; max-width: 800px; padding: 30px 40px");
  questionsEl.setAttribute("id", "questions");
  ifLengthEl.setAttribute("type", "number");
  ifLengthEl.setAttribute("id", "ifLength");
  ifLengthEl.min = 8;
  ifLengthEl.max = 128;
  ifLengthEl.value = 8;
  lengthRulesEl.setAttribute("style", "font-size:10px")
  ifLowercaseEl.setAttribute("type", "checkbox")
  ifLowercaseEl.setAttribute("id", "ifLowercase")
  ifLowercaseEl.setAttribute("checked", "true");
  ifUppercaseEl.setAttribute("type", "checkbox")
  ifUppercaseEl.setAttribute("id", "ifUppercase")
  ifUppercaseEl.setAttribute("checked", "true");
  ifNumericalEl.setAttribute("type", "checkbox")
  ifNumericalEl.setAttribute("id", "ifNumerical")
  ifNumericalEl.setAttribute("checked", "true");
  ifSpecialEl.setAttribute("type", "checkbox")
  ifSpecialEl.setAttribute("id", "ifSpecial")
  ifSpecialEl.setAttribute("checked", "true");
  confirmSelectionsEl.setAttribute("class", "btn");
  confirmSelectionsEl.setAttribute("type", "button");
  confirmSelectionsEl.setAttribute("id", "generateBtn")
  lengthDiv.setAttribute("style", "display: flex");
  lowercaseDiv.setAttribute("style", "display: flex");
  uppercaseDiv.setAttribute("style", "display: flex");
  numericalDiv.setAttribute("style", "display: flex");
  specialDiv.setAttribute("style", "display: flex");

  // Add event listener to generate button.
  generateBtn.addEventListener('click', writePassword);
}

// Add event listener to form button.
formBtn.addEventListener('click', showForm);