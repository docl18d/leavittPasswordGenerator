// characterset assignment
let randomCharString = "";
let charSet = [
    {
        char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        name: "Special Characters",
        use: true
    },
    {
        char: "0123456789",
        name: "Number Characters",
        use: true
    },
    {
        char: "abcdefghijklmnopqrstuvwxyz",
        name: "Lowercase Letters",
        use: true
    },
    {
        char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        name: "Uppercase Letters",
        use: true
    }
]
// user input prompt


const generate = () => {
    let passwordLength = parseInt(prompt("Choose between 8 and 32 characters."));
    let passwordString = "";

    //password length validation
    if (passwordLength > 8 && passwordLength < 32) {
        charSet.forEach(set => {
            const useChar = (prompt(`You chose ${set.name}is that correct?`)).toLowerCase();
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
        alert("Your password does not meet the requirements. Please refresh and try again.");
    }

    //random password charactor input 
    if (randomCharString !== "") {
        for (i = 1; i <= passwordLength; i++) {
            passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
        }

        document.getElementById("password").value = passwordString;
    }
    else {
        alert("You must use at least one kind of character. Please refresh and try again.");
    }
}

// Copy to clipboard function
const copy = () => {
    const copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Your password is copied to the clipboard.");
}