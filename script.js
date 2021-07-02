// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

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
  var lowerCase = confirm("Would you like your password to contain lower-case letters?")

  var upperCase = confirm("Would you like your password to contain upper-case letters?")

  var numberChar = confirm("Would you like your password to contain numbers?")

  var specialChar = confirm("Would you like your password to contain special characters?")

}
}
}

/* var password = generatePassword()
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);