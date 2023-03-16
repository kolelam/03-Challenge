// Assignment Code; let is more modern version of var
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let stringnames = "" ;
  let randopasso = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890±!@#$%^&*()_+-=";


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
