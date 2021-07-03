
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays for random characters

var lowerCaseString = "abcdefghijklmnopqrstuvwxyz"
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharString = "1234567890"
var specialCharString = "!@#$%^&*()"


//random number generator for a specified range
function randomNumber(limit){
var randomCalc = Math.floor(Math.random() * limit)
return randomCalc
}

// Write password to the #password input
function generatePassword() {

// Initial prompt and data validation of # of characters 
var noOfCharacters = prompt("How many characters would you like your password to contain?") 

if (noOfCharacters != null) {

if (isNaN(noOfCharacters)){
alert("Please enter a number")
terminate()
}

if (noOfCharacters < 8) {
alert("Please enter a number equal to or greater than 8")
terminate()
}
if (noOfCharacters > 128) {
alert("Please enter a number equal to or less than 128")
terminate()
}

// Secondary prompts if valid number is entered 
if (8 <= noOfCharacters <= 128) {

  var lowerCase = confirm("Would you like your password to contain lowercase letters?")
    

  var upperCase = confirm("Would you like your password to contain uppercase letters?")
   

  var numberChar = confirm("Would you like your password to contain numbers?")
    
  
  var specialChar = confirm("Would you like your password to contain special characters?")
  

//Concat into final Array
var finalArray = []

  if (lowerCase === true) {
    finalArray += finalArray.concat(lowerCaseString) 
    }
 
  if (upperCase === true) {
    finalArray += finalArray.concat(upperCaseString) 
    }

  if (numberChar === true) {
    finalArray += finalArray.concat(numberCharString) 
    }

  if (specialChar === true) {
    finalArray += finalArray.concat(specialCharString) 
    }
  

// Write password to the #password input

//generate a string of the input length
var generatedPassword = [];

//select a random character from the final array
function getRandomChoice(finalArray){
  var index = randomNumber(finalArray.length);
  return finalArray[index]; 
}

for (var i = 0; i < noOfCharacters; i++) {
  generatedPassword += getRandomChoice(finalArray) 
}
 
}
}
return generatedPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);























