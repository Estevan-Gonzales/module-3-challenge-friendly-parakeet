// Assignment code here

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//Create list of uppercase letters
var upperCaseChars = alphabet.split("");
//Create list of lowercase letters
var lowerCaseChars = alphabet.toLowerCase().split("");
//Create list of numbers
var numericalChars = [1,2,3,4,5,6,7,8,9]
//Create list of special characters
var specialChars   = "!'#$%&()*+,-./:;<=>?@[]^_`{|}~".split("");
specialChars.push('"');
specialChars.push('/');

//Takes 0 arguments and returns 1 string
function generatePassword() {

  var selectionMade = 0;

  var includeUpperCase = validatePrompt(window.prompt("Do you wish to include uppercase letters? (y/n)"));
  var includeLowerCase = validatePrompt(window.prompt("Do you wish to include lowercase letters? (y/n)"));
  var includeNumeric = validatePrompt(window.prompt("Do you wish to include numbers? (y/n)"));
  var includeSpecial = validatePrompt(window.prompt("Do you wish to include special characters? (y/n)"));
  selectionMade = includeUpperCase + includeLowerCase + includeNumeric + includeSpecial
  
  while (selectionMade < 1) {
    window.alert("You must select at least one type of character to be included.");
    var includeUpperCase = validatePrompt(window.prompt("Do you wish to include uppercase letters? (y/n)"));
    var includeLowerCase = validatePrompt(window.prompt("Do you wish to include lowercase letters? (y/n)"));
    var includeNumeric = validatePrompt(window.prompt("Do you wish to include numbers? (y/n)"));
    var includeSpecial = validatePrompt(window.prompt("Do you wish to include special characters? (y/n)"));
    selectionMade = includeUpperCase + includeLowerCase + includeNumeric + includeSpecial

  }

  //Create super array of included characters
  var includedChars = [];
  
  if (includeUpperCase == 1) {
    includedChars = includedChars.concat(upperCaseChars);
  }
  if (includeLowerCase == 1) {
    includedChars = includedChars.concat(lowerCaseChars);
  }
  if (includeNumeric == 1) {
    includedChars = includedChars.concat(numericalChars);
  }
  if (includeSpecial == 1) {
    includedChars = includedChars.concat(specialChars);
  }

  //Create password length variable
  var acceptedLength = 0;
  var passwordLength = 0;
  while (acceptedLength == 0) {
    passwordLength = window.prompt("How long should your password be?\nPlease select a number between 8 and 128, inclusive.");
    if (passwordLength >= 8 && passwordLength <= 128) {
      acceptedLength = 1;
    }
  }

  //Build password
  var password = "";

  for (i = 0; i < passwordLength; i++) {
    password += includedChars[Math.floor(Math.random() * includedChars.length)];
  }

  return password;

}

//Accepts 1 argument and returns 1 or 0
function validatePrompt(userResponse) {
  if (userResponse.toLowerCase() == "y") {
    return 1;
  } else if (userResponse.toLowerCase() == "n") {
    return 0;
  } else {
    while (true) {
      var newResponse = window.prompt("Please enter 'y' or 'n'");
      if (newResponse.toLowerCase() == 'y' || newResponse.toLowerCase() == 'n') {
        if(newResponse.toLocaleLowerCase() == 'y') {
          return 1;
        } else {
          return 0;
        }
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
