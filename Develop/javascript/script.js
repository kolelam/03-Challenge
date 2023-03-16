// Assignment Code; let is more modern version of var
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var stringnames = "";
  var randompassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890±!@#$%^&*()_+-=";
  Math.floor(Math.random() * 128) + 8;
  console.log (Math.floor (Math.random() * 128) + 8);
  var passwordlength = Math.floor(Math.random() * 128) + 8;
  for (var i = 0; i < passwordlength; i++){
    var passwordindex = Math.floor(Math.random() * 72)
    stringnames += randompassword[passwordindex];

  }

  return stringnames;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
