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

//Ask user data needed for generating password

// alert ("Welcome to the Password Generator!");
// alert ("Let's start off with a few questions!");
// var uppercase = confirm ("Do you want to add uppercase characters?");
// var lowercase = confirm ("Do you want to add lowercase characters?");
// var numb = confirm ("Do you want to add numbers?");
// var spec = confirm ("Do you want to add special characters?");
var length = prompt ("How long do you need your password to be?");

// Making sure that the responses are correctly storing
// console.log(uppercase);
// console.log(lowercase);
// console.log(numb);
// console.log(spec);
// console.log(length);

// Character Variables
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";

//Checking Variables show up
// console.log(lowerChar);
// console.log(upperChar);
// console.log(numbChar);
// console.log(specChar);

// console.log(Math.floor(Math.random() * lowerChar.length) +1);

// for looping length times random numbers
  for (var i = 0; i < length; i++) {
    var numbChar = Math.floor(Math.random() * 10)
    console.log(numbChar);
   }

   // for looping length times random lower case letters
   for (var i = 0; i < length; i++) {
     var newLowerChar = lowerChar[Math.floor(Math.random() * lowerChar.length)];
    console.log(newLowerChar);
   }

   for (var i = 0; i < length; i++) {
    var newUpperChar = upperChar[Math.floor(Math.random() * upperChar.length)];
   console.log(newUpperChar);
   }