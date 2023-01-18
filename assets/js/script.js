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
//define the character options for the password
var passwordLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
                      ,"p","q","r","s","t","u","v","w","x","y","z"];
var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"];
var passwordSpecialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="
,"`","~","{","}","[","]",";",":","'","<",">",",",".","?","/","|"];



//using prompts, get the user's password criteria and check it
function getCriteria() {
  var lcf = false;
 
  lettersCriteria = window.confirm("Do you want the password to contain LETTERS? (OK = YES, CANCEL = NO)");
  if (lettersCriteria == true){
    uppercaseCriteria = window.confirm("Do you want the letters to be in UPPERCASE? (OK = YES, CANCEL = NO)");
  }
  numbersCriteria = window.confirm("Do you want the password to contain NUMBERS? (OK = YES, CANCEL = NO)");
  specialCharCriteria = window.confirm("Do you want the password to contain special characters?(OK = YES, CANCEL = NO)");
  
  lengthCriteria = Number(window.prompt("Please enter the password length (at least 8 characters and no more than 128 characters)"));

  while (lcf == false){
    if (lengthCriteria >=8 && lengthCriteria <= 128){
        
        lcf == true;
        break;
      
    } else {
      lengthCriteria = Number(window.prompt("Try Again! Please enter the password length (a number at least 8 and no more than 128 characters)"));
    }

  }
  

  // console.log(lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria)
  return [lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria];
}

//generate the password 
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
  var confirm = window.confirm("Please select OK to generate a password.");
  if (confirm == false){
    return 0;
  }
  var criteria = getCriteria();
  lettersCriteria = criteria[0];
  numbersCriteria = criteria[1];
  specialCharCriteria= criteria[2];
  uppercaseCriteria= criteria[3];
  lengthCriteria= criteria[4];
  console.log("this is the criteria " +lettersCriteria,uppercaseCriteria,numbersCriteria,specialCharCriteria,lengthCriteria)
  var password = generatePassword(lettersCriteria,uppercaseCriteria,numbersCriteria,
    specialCharCriteria,lengthCriteria);
  
//show password in text box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
//show criteria used on the page
  var lettersCritElement = document.querySelector("#letter-criteria");
  var uppercaseCritElement = document.querySelector("#uppercase-criteria");
  var numbersCritElement = document.querySelector("#numbers-criteria");
  var specialCharCritElement = document.querySelector("#special-criteria");
  var lengthElement = document.querySelector("#length-criteria");
 
  lettersCritElement.textContent = "Letters: "+lettersCriteria;
  uppercaseCritElement.textContent = "Uppercase Letters: "+uppercaseCriteria;
  numbersCritElement.textContent = "Numbers: "+numbersCriteria;
  specialCharCritElement.textContent = "Special Characters: "+specialCharCriteria;
  lengthElement.textContent = "Password Length: "+lengthCriteria;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
