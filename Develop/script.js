// Assignment code here
var lettersCriteria = true;
var numbersCriteria = true;
var specialCharCriteria = true;
var uppercaseCriteria = false;
var lengthCriteria = 128;

var passwordLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
                      ,"p","q","r","s","t","u","v","w","x","y","z"];
var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var passwordSpecialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="
,"`","~","{","}","[","]",";",":","'","<",">",",",".","?","/","|"];

var characterSelector = [passwordLetters,passwordNumbers,passwordSpecialChar];



function generatePassword(lettersCriteria,numbersCriteria,
    uppercaseCriteria,specialCharCriteria,lengthCriteria) {
    var password = [];
    var charTypesSelected = [];
    var index = 0;

    //based on criteria, select which character types we will use
    if (lettersCriteria == true){
      charTypesSelected.push(passwordLetters);
    } 
    if (numbersCriteria == true){
      charTypesSelected.push(passwordNumbers)
    }
    if (specialCharCriteria == true){
      charTypesSelected.push(passwordSpecialChar)
    }
    if (lengthCriteria == 0){
      return 0;
    }
    //randomly pick a character
    for (let i = 0; i < lengthCriteria; i++){
      //pick a character type
      index = Math.floor(Math.random()*charTypesSelected.length);
      charType = charTypesSelected[index];
      //pick a character
      index = Math.floor(Math.random()*charType.length);
      char = charType[index];
      console.log(char)
      //append it to the pasword;
      password.push(char);
      console.log(password);
      
    }
    //format the password to a string
    pass = password.join("");
    console.log("this is the password: " + pass);
    return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lettersCriteria,numbersCriteria,
    uppercaseCriteria,specialCharCriteria,lengthCriteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
