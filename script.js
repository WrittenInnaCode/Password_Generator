// Assignment Code
var generateBtn = document.querySelector("#generate");

var choiceArr = [];

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[',  '~', '-', '_', '.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',  'W',  'X',  'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate password using user input
function generatePassword() {
  choiceArr = [];
  var password = "";
  // getting and validating user input
  characterLength = parseInt(prompt("Please enter the number of characters you want in your password. Choose between 8-128 characters."));
  
  if (characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return false;
  }

  if (Number.isNaN(characterLength)){
    alert("Your input has to be a number.")
    return false;
  }

  var hasLowerCase = confirm("Click ok if you want lowercase letters in your password.");
  var hasUpperCase = confirm("Click ok if you want uppercase letters in your password.");
  var hasSpecialCharacters = confirm("Click ok if you want special characters in your password.");
  var hasNumbers = confirm("Click ok if you want numbers in your password.");

  if (!hasLowerCase && !hasUpperCase && !hasSpecialCharacters && !hasNumbers){
    alert("You must pick at least one type of character.")
    return false
  }
// checking if the user asked for certain character, that they receive at least one type and creating a new array out of the characters they chose
  if(hasLowerCase) {
    choiceArr = choiceArr.concat(lowerCase);
    password+=generateRandomCharacter(lowerCase); // (+= means password = password+ )
  }

  if(hasUpperCase) {
    choiceArr = choiceArr.concat(upperCase);
    password+=generateRandomCharacter(upperCase);
  }
    
  if(hasSpecialCharacters) {
    choiceArr = choiceArr.concat(specialCharacters);
    password+=generateRandomCharacter(specialCharacters);
  }

  if(hasNumbers) {
    choiceArr = choiceArr.concat(numbers);
    password+=generateRandomCharacter(numbers);
  }
// figuring out the remaining characters owed and adding them to the password
  var remainingCharacters = characterLength - password.length

  for (var i=0; i < remainingCharacters; i++) {
    password += generateRandomCharacter(choiceArr); 
  }
return password;

}
// function for generating a ramdon character from any given array
function generateRandomCharacter(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}


// ______alternative while loop______
// while (remaingCharacters > 0){ 
// password += generateRandomCharacter(choiceArr);
// remainingCharacters--
// }