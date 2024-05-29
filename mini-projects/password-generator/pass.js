const output=document.getElementById("output");
const myBtn=document.getElementById("myBtn");



myBtn.addEventListener("click",function(){
    const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols);

output.textContent=`Generated Password: ${password}`;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()=";

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbols ? symbolChars : " ";
    allowedChars+=includeNumbers? numberChars:" ";

    if(length <=0){
        return `(password lenght must be at least 1)`;
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of characater needs to be selected)`;

    }

    for (let i=0; i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password +=allowedChars[randomIndex];
    }
    
    return password;

}





