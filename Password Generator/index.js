const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//variables
let chars=[];
//get the DOM elements
let generatePasswordEl = document.getElementById("btn-generate-password");
let pass1El = document.getElementsByClassName("password")[0];
let pass2El = document.getElementsByClassName("password")[1];

//password must be 15 character length
generatePasswordEl.addEventListener("click",generatePassword);
function generateRandomString(){
    console.log("generating password");   
    for(let i=0;i<15;i++){
        let randomIndex = Math.floor(Math.random()*characters.length);
        chars.push(characters[randomIndex]);
    }
    return chars.join("")
}

function generatePassword(){
    pass1El.textContent = generateRandomString();
    chars.length = 0;
    pass2El.textContent = generateRandomString();
}



