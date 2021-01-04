// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

alert ("Welcome to the Password Generator!");
alert ("Let's start off with a few questions!");
var uppercase = confirm ("Do you want to add uppercase characters?");
var lowercase = confirm ("Do you want to add lowercase characters?");
var numb = confirm ("Do you want to add numbers?");
var spec = confirm ("Do you want to add special characters?");

// Making sure that the responses are correct
console.log(uppercase);
console.log(lowercase);
console.log(numb);
console.log(spec);
