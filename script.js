function newGame() {
    correct = 0;
    numWrong = 0;
    numRight = 0;
    answerArray = [];
    hngmn.clearRect(0, 0, canvas.width, canvas.height);
    $('.answer').remove();
    $('.buttons').remove();
    pickWord();
    hangman();
    document.getElementById("start").style.visibility = "hidden";
};

//Create array of word options
const words = [
    "FRIENDLY",
    "TERRIBLE",
    "EXPLOSION",
    "FLAVOR",
    "BOMB",
    "PILLAR",
    "ANOTHER",
    "ROUGHOUSE"
];
let correct = 0;
let rand = 0;
let word = "";
let numRight = 0;
let numWrong = 0;
let wordlength = 0;
let numChar = 0;
let lives = 6;
let wordArray = [];
let myScore = 0;
let answerArray = [];

//Start with a word and create answer array
function pickWord() {

    for (var i = 0; i < alphabet.length; i++) {
        $('#buttons').append(`<li class='buttons'>${alphabet[i]}</li>`)
    }
    rand = Math.floor(Math.random() * words.length);
    word = words[rand];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    for (var i = 0; i < answerArray.length; i++) {
        $('#word').append(`<li class='answer' data-id=${i}>${answerArray[i]}</li>`)
    } console.log(word)
    wordArray = word.split("");
    console.log(wordArray)
    const guess = document.getElementsByClassName("buttons")
    for (let i = 0; i < guess.length; i++) {
        guess[i].addEventListener('click', (event) => {
            let letter = event.target.innerHTML;
            console.log(letter);
            correct = numRight;
            for (let x = 0; x < wordArray.length; x++) {
                if (letter === wordArray[x]) {
                    $(`.answer[data-id=${x}]`).text(`${alphabet[i]}`);
                    numRight++;
                }
            }
            if (correct === numRight) {
                numWrong++;
            }
            if (numRight === wordArray.length) {
                myScore = myScore + 100
                document.getElementById('scoreboard').innerHTML = "Score = " + myScore;
                alert("You win! Click [New Game] to play again.");
            }
            guess[i].style.visibility = "hidden";
            if (numWrong === 1) {
                hang1();
            }
            if (numWrong === 2) {
                hang2();
            }
            if (numWrong === 3) {
                hang3();
            }
            if (numWrong === 4) {
                hang4();
            }
            if (numWrong === 5) {
                hang5();
            }
            if (numWrong === 6) {
                hang6();
                setTimeout(lose, 200);
            }
        })
    }
}

function lose() {
    alert("You Lose! Please try again.");
    newGame();
}



// //Display Hangman
let canvas = document.getElementById("hangman");
let hngmn = canvas.getContext("2d");
function hangman() {
    hngmn.fillStyle = "white";
    hngmn.lineWidth = 4;
    hngmn.fillRect(0, 0, 400, 400);
    hngmn.beginPath();
    hngmn.moveTo(50, 350);
    hngmn.lineTo(50, 25);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(65, 350);
    hngmn.lineTo(65, 85);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(65, 64);
    hngmn.lineTo(65, 40);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(49, 25);
    hngmn.lineTo(250, 25);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(49, 40);
    hngmn.lineTo(86, 40);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(106, 40);
    hngmn.lineTo(250, 40);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(248, 25);
    hngmn.lineTo(248, 40);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(50, 80);
    hngmn.lineTo(100, 25);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(60, 90);
    hngmn.lineTo(111, 35);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(50, 80);
    hngmn.lineTo(60, 90);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(100, 25);
    hngmn.lineTo(111, 35);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(35, 350);
    hngmn.lineTo(365, 350);
    hngmn.stroke();
    hngmn.beginPath();
    hngmn.moveTo(225, 40);
    hngmn.lineTo(225, 100);
    hngmn.stroke();
}


//Display alphabet
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z']


//Create functions for visuals of game

function hang1() {
    hngmn.beginPath();
    hngmn.arc(225, 130, 30, 0, 2 * Math.PI);
    hngmn.stroke();
}

function hang2() {
    hngmn.beginPath();
    hngmn.moveTo(225, 160);
    hngmn.lineTo(225, 250);
    hngmn.stroke();
}

function hang3() {
    hngmn.beginPath();
    hngmn.moveTo(225, 195)
    hngmn.lineTo(170, 158)
    hngmn.stroke();
}

function hang4() {
    hngmn.beginPath();
    hngmn.moveTo(225, 195)
    hngmn.lineTo(280, 158)
    hngmn.stroke();
}

function hang5() {
    hngmn.beginPath();
    hngmn.moveTo(225, 248)
    hngmn.lineTo(170, 295)
    hngmn.stroke();
}

function hang6() {
    hngmn.beginPath();
    hngmn.moveTo(225, 248)
    hngmn.lineTo(280, 295)
    hngmn.stroke();
}

