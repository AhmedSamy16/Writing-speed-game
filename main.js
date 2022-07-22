
// Start Variables

const lvls = {
    "Easy" : 5,
    "Normal" : 3,
    "Hard" : 2
}

let defaultLvl = "Normal";

let defaultLvlSeconds = lvls[defaultLvl];

let words = ["Ahmed", "Abdo", "Testing", "Youtube", "Linkedin", "Twitter", "Rust", "Python", "Html", "Playing", "Roles", "Coding"];

let startButton = document.querySelector("button"),

    lvlsName = document.querySelector(".lvl"),

    lvlsNameTime = document.querySelector(".seconds"),

    theWordDiv = document.querySelector(".the-word"),

    theInput = document.querySelector("input"),

    theTotalWords = document.querySelector(".words"),

    timeLeftSpan = document.querySelector(".time span"),

    earnScore = document.querySelector(".got"),

    totalScore = document.querySelector(".total"),

    finishMsg = document.querySelector(".finish");

// End Variables

// Start Actions

lvlsName.textContent = defaultLvl;

lvlsNameTime.textContent = defaultLvlSeconds;

timeLeftSpan.textContent = defaultLvlSeconds;

totalScore.textContent = words.length;

theInput.onpaste = function () {
    return false;
}

startButton.onclick = function () {

    theInput.focus();

    this.remove();

    genWords();
}
// End Actions 

// Start Functions

function genWords() {

    theTotalWords.textContent = "";

    let randomWord = words[Math.floor(Math.random() * words.length)];

    theWordDiv.textContent = randomWord;

    let randWordIndex = words.indexOf(randomWord);

    words.splice(randWordIndex, 1);

    for (let i = 0; i < words.length; i++) {

        let mainDiv = document.createElement("div"),

            mainDivText = document.createTextNode(words[i]);

        mainDiv.appendChild(mainDivText);

        theTotalWords.appendChild(mainDiv);
    }

    playTime();
}

function playTime() {

    timeLeftSpan.textContent = defaultLvlSeconds; 

    let start = setInterval(() => {

        timeLeftSpan.textContent--;

        if (timeLeftSpan.textContent == '0') {

            clearInterval(start);

            if (theWordDiv.textContent.toLocaleLowerCase() == theInput.value.toLocaleLowerCase()) {

                theInput.value = "";

                earnScore.textContent++;

                if (words.length > 0) {

                    genWords();
                } else {

                    let goodSpan = document.createElement("span");

                    goodSpan.className = "good";

                    goodSpan.appendChild(document.createTextNode("Congratz"));

                    finishMsg.appendChild(goodSpan);
                }
            } else {

                let badSpan = document.createElement("span");

                badSpan.className = "bad";

                badSpan.appendChild(document.createTextNode("Game Over"));

                finishMsg.appendChild(badSpan);
            }
        }
    }, 1000)
}
// End Functions