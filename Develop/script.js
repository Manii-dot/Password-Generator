// Assignment Code
var generateBtn = document.querySelector("#generate");


//Variable for all characters that will be used to generate a password.
var num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLettter = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// This function prompt user for possible options with at least one type of requirement.
function getOptionForPassword(){
  var isValid = false;
  do {
  var length = prompt ("How many characters would you like your password to have from 8 and 128?");
  var hasSpecialChar = confirm ("Would you like special character in your password?")
  var hasnumber = confirm ("Do you want a number in your Password?")
  var hasUpperCase = confirm ("Do you want uppercase letters in your password?")
  var haslowerCase = confirm ("Do you want lowercase letters in your password?")
  var PasswordResponses = {
    length:length,
    hasnumber:hasnumber,
    hasUpperCase:hasUpperCase,
    haslowerCase:haslowerCase,
    hasSpecialChar:hasSpecialChar,  
  }
  if((length < 8 ) || (length > 128))
  alert("Can you please pick a number that is between 8 and 128?");
  else if((!hasSpecialChar) && (!hasnumber) && (!hasUpperCase) && (!haslowerCase))
  alert("Please choose one character type!");
  else
  isValid = true;

  }while(!isValid)
  return PasswordResponses;
}

// Function combines all results from user and generate a desired password
function generatePassword(){
  var useroption = getOptionForPassword();
  var potentialPassOutcome = [];
  var ultimatePass = "";

  if (useroption.hasnumber) {
    for (var i of num)
    potentialPassOutcome.push(i);
  }
  if (useroption.hasUpperCase) {
    for (var i of upperCaseLetter)
    potentialPassOutcome.push(i);
  }
  if (useroption.haslowerCase) {
    for (var i of lowerCaseLettter)
    potentialPassOutcome.push(i);
  }
  if (useroption.hasSpecialChar) {
    for (var i of specialChar)
    potentialPassOutcome.push(i);
  }

  console.log(potentialPassOutcome);


for(var i = 0; i < length; i++){
  ultimatePass += potentialPassOutcome[Math.floor(Math.random()*potentialPassOutcome.length)];
}
console.log(ultimatePass);

return ultimatePass;
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
