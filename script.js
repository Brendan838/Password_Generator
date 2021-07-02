


function randoNumba(limit){
var randoCalc = Math.floor(Math.random() * limit)
return randoCalc
}

var numbers  = ["0","9","8","7","6","5","4","3","2","1"]


function getRandomChoice(_insertArray){
  var index = randoNumba(_insertArray.length);
  return _insertArray[index]; 
}

var generatedPassword = "";

for (var i = 0; i < 8; i++) {
  generatedPassword += getRandomChoice(numbers)
}

console.log(generatedPassword)

/*

// Assignment Code
var generateBtn = document.querySelector("#generate")
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharString = "0123456789";
var specialCharString = "!@#$%^&*()";

console.log(Math.floor(Math.random() * 26))


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

// Generate a password using length, lower, upper, number, and special






generatePassword()





  password = generatePassword()

  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
}
}

  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



*/