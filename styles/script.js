// characterset assignment
let randomCharString = "";
let charSet = [
    {
        char: "!#$%&'()*+,-./;<=>?@[]^_`{|}~",
        name: "Special Characters",
        use: false
    },
    {
        char: "0123456789",
        name: "Number Characters",
        use: false
    },
    {
        char: "abcdefghijklmnopqrstuvwxyz",
        name: "Lowercase Letters",
        use: false
    },
    {
        char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        name: "Uppercase Letters",
        use: false
    }
]
// user input prompt


const generate = () => {
    let passwordLength = parseInt(prompt("Choose between 8 and 32 characters."));
    let passwordString = "";

    //password length validation.  Included input instructions.
    if (passwordLength > 8 && passwordLength < 32) {
        charSet.forEach(set => {
            const useChar = (prompt(`Type "yes" or or "no".  You chose ${set.name}is that correct?`)).toLowerCase();
            if (useChar === "yes" || useChar === "y") {
                set.use = true;
            }
            if(set.use){
                randomCharString = randomCharString + set.char;
            }
        });
        console.log(JSON.stringify(charSet))
    }
    else {
        alert("Password length chosen does not meet the requirements. Try again.");
    }

    //random password charactor input 
    if (randomCharString !== "") {
        for (i = 1; i <= passwordLength; i++) {
            passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
        }

        document.getElementById("password").value = ("Here is your super secret ninja stealthy password:" + passwordString);
    }
    else {
        alert("You must use at least one character type. Try again.");
    }
}

// Copy to clipboard function
const copy = () => {
    const copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Your password is copied to the clipboard.");
}