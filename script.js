var character = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  // Array of numeric characters to be included in password
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
  var lowercase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  var uppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];


  function getRandom(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }


function generatePassword(){
  console.log("generate");
  var length = prompt("Length of password (1-25)");
  var hasLowerCase = confirm("lowercase?");
  var hasNumber = confirm("number?");
  var hasUpperCase = confirm("uppercase?"); 
  var hasSymbol = confirm("symbol?");

  var garanteedCharacters = [];
  let possibleCharacters = [];

  if(hasLowerCase===true){
    garanteedCharacters.push(getRandom(lowercase));
    possibleCharacters=possibleCharacters.concat(lowercase);
  }
  if(hasNumber===true){
    garanteedCharacters.push(getRandom(number));
    possibleCharacters=possibleCharacters.concat(number);
  }
  if(hasUpperCase===true){
    garanteedCharacters.push(getRandom(uppercase));
    possibleCharacters=possibleCharacters.concat(uppercase);
  }
  if(hasSymbol===true){
    garanteedCharacters.push(getRandom(character));
    possibleCharacters=possibleCharacters.concat(character);
  };

var remaningPasswordLength = length - garanteedCharacters.length;
for (let i = 0; i < remaningPasswordLength; i++){
  garanteedCharacters.push(getRandom(possibleCharacters))
}


return garanteedCharacters.join("")
}




var generateBtn = document.querySelector("#generate");

function writePassword() {
  console.log("writePassword");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
