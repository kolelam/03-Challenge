// Assignment Code; let is more modern version of var
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let stringnames = "" ;
  let randopasso = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890±!@#$%^&*()_+-=";
  Math.floor(Math.random() * 128) + 8;
  console.log (Math.floor (Math.random() * 128) + 8);
  let randopasso = Math.floor(Math.random() * 128) + 8;
  for (var i = 0; i < passwordlength; i++) {
    let passwordindex = 
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
