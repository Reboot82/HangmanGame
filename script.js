function newGame(){
    $('.answer').remove()
    pickWord();
};

//Create array of word options
const words = [
    "TELEVISION",
    "LYNX",
    "EXPLOSION",
    "BRONTOSAURUS",
    "HYPERTEXT",
    "PILLAR",
    "ANOTHER",
    "PRESIDENTIAL"
];
let rand = 0;
let word = "";
let numRight = 0;
let numWrong = 0;
let wordlength = 0;
let numChar = 0;
let lives = 6;
let wordArray = []

//Start with a word and create answer array
function pickWord(){
    rand = Math.floor(Math.random() * words.length);
    word = words[rand];
    let answerArray = [];
    for(let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    } 
    for (var i = 0; i < answerArray.length; i++) {
        $('#word').append(`<li class='answer' data-id=${i}>${answerArray[i]}</li>`)
    } console.log(word)
    wordArray = word.split("");
    console.log(wordArray)
    const guess = document.getElementsByClassName("buttons")
    for(let i = 0; i < guess.length; i++) {
        guess[i].addEventListener('click', () => {
            console.log(alphabet[i]);

            for(let x = 0; x < wordArray.length; x++) {
                if(alphabet[i] === wordArray[x]) {
                    $(`.answer[data-id=${x}]`).text(`${alphabet[i]}`)
                }
            }
        })
    }
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

    //Display alphabet
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
'W','X','Y','Z']


for (var i = 0; i < alphabet.length; i++) {
    $('#buttons').append(`<li class='buttons'>${alphabet[i]}</li>`)
}




// // //Keep track of players progress
// // let remainingLetters = word.length
// // while(remainingLetters > 0) {
    
// // }