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

alert ("Welcome to the Password Generator!");
alert ("Let's start off with a few questions!");
var uppercase = confirm ("Do you want to add uppercase characters? If so, press Okay");
var lowercase = confirm ("Do you want to add lowercase characters? If so, press Okay");
var numb = confirm ("Do you want to add numbers? If so, press Okay");
var spec = confirm ("Do you want to add special characters? If so, press Okay");
var pwLength = prompt ("How long do you need your password to be?");

// Making sure that the responses are correctly storing
console.log(uppercase);
console.log(lowercase);
console.log(numb);
console.log(spec);

// Checking to see if the user's input is a string or a number
var length = parseInt(length);
console.log(pwLength);
console.log(typeof(pwLength));

// Character Variables
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// for looping length times random numbers
  for (var i = 0; i < pwLength; i++) {
    var numbChar = Math.floor(Math.random() * 10)
    console.log(numbChar);
   }

  //  Testing the functions, may potentially use this and combine it with the other variables to generate a password
  //  function randomUpper () {
  //    return lowerChar[Math.floor(Math.random() *lowerChar.length)]
  //  }
  //  console.log("------");
  //  console.log(randomUpper());
  //  console.log("------");

   // for looping length times random lower case letters
   for (var i = 0; i < pwLength; i++) {
     var newLowerChar = lowerChar[Math.floor(Math.random() * lowerChar.length)];
    console.log(newLowerChar);
   }

   // for looping length times random lower case letters
   for (var i = 0; i < pwLength; i++) {
    var newUpperChar = upperChar[Math.floor(Math.random() * upperChar.length)];
   console.log(newUpperChar);
   }

   // symbol randomizer
   function randomSymbol () {
     const symbols = "!@#$%^&*()-_=+.><,/?';:";
     return symbols[Math.floor(Math.random() * symbols.length)]
   }

   console.log(randomSymbol());

   //Length for password with alerts!
    if (pwLength <= 7)
      alert("Password must be at least 8 characters!");

      else if (pwLength > 128)
      alert("Password must be less than 128 characters!");

      else
      alert("Perfect! Thanks!");
