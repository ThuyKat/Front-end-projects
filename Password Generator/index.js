const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


//variables
let targetChars = characters;
let passChars = [];
let options = {
  numbers: true,
  symbols: true,
};
const numbers = characters.filter(char => /[0-9]/.test(char));
const symbols = characters.filter(char => /[^a-zA-Z0-9]/.test(char));
//get the DOM elements
let generatePasswordEl = document.getElementById("btn-generate-password");
let pass1El = document.getElementsByClassName("password")[0];
let pass2El = document.getElementsByClassName("password")[1];
let lengthOfPasswordEl = document.getElementById("slider");
let rangeValueEl = document.getElementById("range-value");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");

let checkboxContainerEl = document.querySelector(".checkbox-container");

//set inital value for the slider
rangeValueEl.textContent = lengthOfPasswordEl.value;

//update value when slider moves
lengthOfPasswordEl.addEventListener("input", function () {
  rangeValueEl.textContent = this.value;
});

//update value when checkbox values change
checkboxContainerEl.addEventListener("change", function () {
  console.log("update")
  options = {
    numbers: numbersEl.checked,
    symbols: symbolsEl.checked,
  };
  //update targetChars
if (!options.numbers) {
    targetChars = targetChars.filter((char) => (/[^0-9]/.test(char)))
  }else{
    targetChars = targetChars.concat(numbers)
  }
if (!options.symbols) {
    targetChars = targetChars.filter((char) => /[a-zA-Z0-9]/.test(char));
  }else{
    targetChars = targetChars.concat(symbols)
  }
});

//password must be 15 character length
generatePasswordEl.addEventListener("click", generatePassword);

//copy to clipboard
document.getElementById("password1").addEventListener("click",function(){copyToClipboard(this.textContent)})
document.getElementById("password2").addEventListener("click",function(){copyToClipboard(this.textContent)})

function copyToClipboard(text){
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Copied password to clipboard',text);
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
function generatePassword() {
  pass1El.textContent = generateRandomString();
  passChars.length = 0;
  pass2El.textContent = generateRandomString();
  passChars.length = 0;
}
function generateRandomString() {
  console.log("generating password");

  for (
    let i = 0;
    i < Math.min(lengthOfPasswordEl.value, targetChars.length);
    i++
  ) {
    let randomIndex = Math.floor(Math.random() * targetChars.length);
    passChars.push(targetChars[randomIndex]);
  }
  return passChars.join("");
}
