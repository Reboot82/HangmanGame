function newGame(){
    location.reload()
};

//Create array of word options
const words = [
    "television",
    "lynx",
    "explosion",
    "brontosaurus",
    "hypertext",
    "pillar"
];
let rand = 0;
let word = "";
let numRight = 0;
let numWrong = 0;
let wordlength = 0;
let numChar = 0;
let lives = 6;

//Start with a word and create answer array
function pickWord(){
    rand = Math.floor(Math.random() * words.length);
    word = words[rand];
    let answerArray = [];
    for(let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    } return word
}


// //Display Hangman
let canvas = document.getElementById("hangman");
let hngmn = canvas.getContext("2d");
hngmn.fillStyle = "white";
hngmn.lineWidth=4;
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
    


// // //Keep track of players progress
// // let remainingLetters = word.length
// // while(remainingLetters > 0) {
    
// // }