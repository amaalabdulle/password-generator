// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // 10

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

  var length = prompt ("Enter a password with a length of minimum 8 characters but no more than 128.");
  
  if (length < 8 || length > 128) {
    alert ("The password you have entered does not meet the length requirements");
  } else {
    alert ("The password you have entered meets the length requirements") 
  }

  // checking if special characters have been included
  var specialCharacters = confirm ("Does your password contain a special character?");
  var numericCharacters  = confirm ("Does your password contain a numeric character?");
  var lowerCasedCharacters = confirm ("Does your password contain a lower cased character?");
  var upperCasedCharacters = confirm ("Does your password contain an upper cased character?");

  // && checks that boolean operator is true.
  // to check if it is false add exclamation mark in front of it.
  if (!specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters)
    alert ("Please enter at lease one special character!");
    return;
}
var options = getPasswordOptions();
console.log(options);

// Function for getting a random element from an array

function getRandomSpecial(specialCharacters) {
  return specialCharacters (Math.floor(Math.random() * 23)); // Math.floor() // rounded down
}
console.log(getRandomSpecial);

function getRandomNumeric(numericCharacters) {
  return numericCharacters (Math.floor(Math.random() * 10));
}
console.log(getRandomNumeric);

function getRandomLower(lowerCasedCharacters) {
  return lowerCasedCharacters (Math.floor(Math.random() * 26));
}
console.log(getRandomLower);

function getRandomUpper(upperCasedCharacters) {
  return upperCasedCharacters (Math.floor(Math.random() * 26));
}
console.log(getRandomUpper);


// Function to generate password with user input
// function generatePassword() {
//   var password = "";
//   for (var i = 0; i < length; i++) {
//     password = password + 
//   }
  
// }

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