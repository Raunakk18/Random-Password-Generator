const passwordBox = document.querySelector("#password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

const allChars= upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length >password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    
}

function copyPassword(){
    const password = passwordBox.value;
    const copyMsg = document.querySelector("#copy-msg");

    if(password){
        navigator.clipboard.writeText(password)
        .then( ()=>{
            copyMsg.classList.add("show");

            setTimeout( () =>{
                copyMsg.classList.remove("show");
            },2000)
        })
        .catch((error) => {
            console.error("Failed to copy: ", error);
        });
    }
    else{
        alert("Please generate a password first!");
    }
}
