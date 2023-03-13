// Assignment Code; let is more modern version of var
let generateBtn = document.querySelector("#generate");
let length = document.querySelector('#length');
let passlength = document.querySelector('#lengthresult')
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let copypassword = document.querySelector('#copy');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
