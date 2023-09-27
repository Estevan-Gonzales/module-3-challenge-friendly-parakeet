// Assignment code here

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperCaseChars = alphabet.split("");
var lowerCaseChars = alphabet.toLowerCase().split("");
var numericalChars = [1,2,3,4,5,6,7,8,9]
var specialChars   = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
specialChars.push('"');
specialChars.push('/');

function generatePassword() {
  var includeUpperCase = validatePrompt(window.prompt("Do you wish to include uppercase letters? (y/n)"));
  var includeLowerCase = validatePrompt(window.prompt("Do you wish to include lowercase letters? (y/n)"));
  var includeNumeric = validatePrompt(window.prompt("Do you wish to include numbers? (y/n)"));
  var includeSpecial = validatePrompt(window.prompt("Do you wish to include special characters? (y/n)"));

  var includedChars = [];
  
  if (includeUpperCase == 'y') {
    includedChars = includedChars.concat(upperCaseChars);
  }
  if (includeLowerCase == 'y') {
    includedChars = includedChars.concat(lowerCaseChars);
  }
  if (includeNumeric == 'y') {
    includedChars = includedChars.concat(numericalChars);
  }
  if (includeSpecial == 'y') {
    includedChars = includedChars.concat(specialChars);
  }
  console.log(includedChars);

  var generatedLength = 0;
  while (generatedLength < 8) {
    generatedLength = Math.max(8, Math.floor(Math.random() * 129));
  }

  var password = "";

  for (i = 0; i < generatedLength; i++) {
    password += includedChars[Math.floor(Math.random() * includedChars.length)];
    console.log(password);
  }

  return password;

}

function validatePrompt(userResponse) {
  if (userResponse.toLowerCase() == "y") {
    return 'y';
  } else if (userResponse.toLowerCase() == "n") {
    return 'n';
  } else {
    while (true) {
      var newResponse = window.prompt("Please enter 'y' or 'n'");
      if (newResponse.toLowerCase() == 'y' || newResponse.toLowerCase() == 'n') {
        return newResponse.toLowerCase();
      }
    }
  }
}

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
