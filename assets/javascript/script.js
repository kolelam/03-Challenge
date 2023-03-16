// Assignment Code; let is more modern version of var
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  let stringnames = "";
  let randompassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890±!@#$%^&*()_+-=";
  Math.floor(Math.random() * 128) + 8;
  console.log (Math.floor (Math.random() * 128) + 8);
  let passwordlength = Math.floor(Math.random() * 128) + 8;
  for (let i = 0; i < passwordlength; i++){
    let passwordindex = Math.floor(Math.random() * 72)
    stringnames += randompassword[passwordindex];

  }

  return stringnames;

}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
