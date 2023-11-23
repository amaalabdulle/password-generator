// Array of special characters to be included in password
var specialCharactersArr = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.' // 23
];

// Array of numeric characters to be included in password
var numericCharactersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // 10

// Array of lowercase characters to be included in password
var lowerCasedCharactersArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z' //26
];

// Array of uppercase characters to be included in password
var upperCasedCharactersArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z' // 26
];


// Function to prompt user for password options
function getPasswordOptions() {
  // length between 8 and 128.

  var length = parseInt(prompt("Enter a password with a length of minimum 8 characters but no more than 128."));
  console.log(length);
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("The password you have entered does not meet the length requirements");
    return;
  } else {
    alert("The password you have entered meets the length requirements")
  }
  // checking if special characters have been included
  var specialCharacters = confirm("Does your password contain a special character?");
  var numericCharacters = confirm("Does your password contain a numeric character?");
  var lowerCasedCharacters = confirm("Does your password contain a lower cased character?");
  var upperCasedCharacters = confirm("Does your password contain an upper cased character?");

  // && checks that boolean operator is true.
  // to check if it is false add exclamation mark in front of it.
  if (!specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters) {
    alert("Please enter at lease one special character!");
    return;
  }
  return {length, specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters};
}

// Function for getting a random element from an array

function getRandomSpecial(options) {

  var allCharacters = [];
  // making one array with all characters included
  // push adds new items to the end of an array

  if (options.specialCharacters) {
    allCharacters = allCharacters.concat(specialCharactersArr);
  }
  if (options.numericCharacters) {
    allCharacters = allCharacters.concat(numericCharactersArr);
  }
  if (options.lowerCasedCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharactersArr);
  }
  if (options.upperCasedCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharactersArr);
  }
  console.log(allCharacters);

  var password = '';
  for (var i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    console.log(randomIndex);
    var selectedCharacter = allCharacters[randomIndex]; // defining that selected array
    password = password + selectedCharacter; // adding the random character from the random array to password
  }
  return password;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions ();
  var password = getRandomSpecial(options);
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

