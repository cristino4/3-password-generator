// Assignment code here
// var lettersCriteria = true;
// var numbersCriteria = true;
// var specialCharCriteria = true;
// var uppercaseCriteria = true;
// var lengthCriteria = 10;
var lettersCriteria;
var numbersCriteria;
var specialCharCriteria;
var uppercaseCriteria;
var lengthCriteria;

var passwordLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
                      ,"p","q","r","s","t","u","v","w","x","y","z"];
var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var passwordSpecialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="
,"`","~","{","}","[","]",";",":","'","<",">",",",".","?","/","|"];


function getCriteria() {

  window.confirm("Please select OK or CANCEL to select an option");
  lettersCriteria = window.confirm("Do you want the password to contain LETTERS?");
  uppercaseCriteria = window.confirm("Do you want the letters to be in UPPERCASE?");
  numbersCriteria = window.confirm("Do you want the password to contain NUMBERS?");
  specialCharCriteria = window.confirm("Do you want the password to contain special characters?");
  lengthCriteria = Number(window.prompt("Please enter the password length (at least 8 characters and no more than 128 characters)"))
  


  // console.log(lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria)
  return [lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria];
}

function generatePassword(lettersCriteria,numbersCriteria,
    uppercaseCriteria,specialCharCriteria,lengthCriteria) {
    var password = [];
    var charTypesSelected = [];
    var index = 0;
    console.log(lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria);
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
      //append it to the pasword;
      password.push(char);
    }
    //format the password to a string
    pass = password.join("");
    //convert letters to uppercase if applicable
    if (uppercaseCriteria == true){
      pass = pass.toUpperCase();
    }
    console.log("this is the password: " + pass);
    return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var criteria = getCriteria();
  lettersCriteria = criteria[0];
  numbersCriteria = criteria[1];
  specialCharCriteria= criteria[2];
  uppercaseCriteria= criteria[3];
  lengthCriteria= criteria[4];
  // console.log("criteria"+ criteria);
  // console.log("write password")
  // console.log(lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria)
  var password = generatePassword(lettersCriteria,uppercaseCriteria,numbersCriteria,
    specialCharCriteria,lengthCriteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
