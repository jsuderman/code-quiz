// variables to manipulate the document
var startButton = document.querySelector("#start-btn");
var questionButton = document.querySelector("#question");
var answerButton = document.querySelector("#answer-buttons");
var timerButton = document.querySelector("#timer");
var timerSeconds = document.querySelector("#seconds");
var questionContainer = document.querySelector("#question-container");

var startingSecond = 60;
let time = startingSecond * 60;


setInterval(updateCounter, 1000);

startButton.addEventListener("click", startGame)







var questions = [
    {
       question: "Inside which HTML element do we put the JavaScript?",
       answers: [
           { text: "<js>", correct: false },
           { text: "<script>", correct: true },
           { text: "scripting", correct: false },
           { text: "<javascript>", correct: false }
       ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
       answers: [
           { text: "<js>", correct: false },
           { text: "<script>", correct: true },
           { text: "scripting", correct: false },
           { text: "<javascript>", correct: false }
       ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
       answers: [
           { text: "<js>", correct: false },
           { text: "<script>", correct: true },
           { text: "scripting", correct: false },
           { text: "<javascript>", correct: false }
       ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
       answers: [
           { text: "<js>", correct: false },
           { text: "<script>", correct: true },
           { text: "scripting", correct: false },
           { text: "<javascript>", correct: false }
       ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
       answers: [
           { text: "<js>", correct: false },
           { text: "<script>", correct: true },
           { text: "scripting", correct: false },
           { text: "<javascript>", correct: false }
       ]
    },

]









function startGame() {
    console.log("game started")
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    
    
}

function updateCounter() {
    // var minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerSeconds.innerHTML = seconds
    time--;

    if(time <= 0) {
        clearInterval(time = 0)
    }
}

function nextQuestion() {


}
