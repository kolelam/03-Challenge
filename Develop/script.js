// Assignment Code; let is more modern version of var
let generateBtn = document.querySelector("#generate");
let length = document.querySelector('#length');


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
