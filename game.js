// variables to manipulate the document
var startButton = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var timerButton = document.getElementById("timer");
var timerSeconds = document.getElementById("seconds");
var questionContainer = document.getElementById("question-container");
var answerMenu = document.querySelector("#answer-menu");

var questions = [
    {
       title: "Inside which HTML element do we put the JavaScript?",
       options: ["<js>", "<script>", "scripting", "<javascript>"],
       correct: "<script>"
           
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
       options: ["<js>", "<script>", "scripting", "<javascript>"],
       correct: "<script>"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<script>", "scripting", "<javascript>"],
        correct: "<script>"
       
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
       options: ["<js>", "<script>", "scripting", "<javascript>"],
       correct: "<script>"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<script>", "scripting", "<javascript>"],
        correct: "<script>"
    },
]

var questionNumber = 0;
// vars for questions
var questionTitle = questions[questionNumber].title

// vars for answers
var numberOfQuestions = questions.length
var questionOptions = questions[questionNumber].options;


var startingSecond = 90;
let time = startingSecond * 60;








startButton.addEventListener("click", startGame)
setInterval(updateCounter, 1000);

function updateCounter() {
   
    timerSeconds.innerHTML = startingSecond
    startingSecond--;

    if(startingSecond <= 0) {
        clearInterval(startingSecond = 0)
    }
    
    
}


function startGame() {
    console.log("game started")
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    showQuestions();
    listOptions();
    
}

function showQuestions() {
    for (var i = 0; i < questions; i++) {
        var titleHeader = document.createElement("h2");
        titleHeader.setAttribute("class", "h2");
        
        titleHeader.textContent = questions[questionNumber].title[i];
        questionEl.appendChild(titleHeader);
    }
    questionEl.innerText = questions[questionNumber].title
    console.log(questions)
}

function listOptions() {
    for (var i = 0; i < questionOptions.length; i++) {

        var buttonAnswers = document.createElement("button");
        buttonAnswers.setAttribute("class", "btn");
        buttonAnswers.setAttribute("id", "answer-" + i);
        buttonAnswers.textContent = questions[questionNumber].options[i];
        answerMenu.appendChild(buttonAnswers);

        // buttonAnswers.addEventListener("click", function(event) {
        //     // if (event.target.matches(".answer-btn")) {
        //     //     event.stopPropagation();
        //     //     event.preventDefault();
        //     // }
        //     if (event.target.textContent === questions[questionNumber].correct) {
        //         questionNumber = questionNumber + 1;
        //     }
        // })
    }
    
    nextquestion();
    
}

function nextquestion() {
    for (var i = 0; i < questions; i++) {
        var titleHeader = document.createElement("h2");
        titleHeader.setAttribute("class", "h2");
        
        titleHeader.textContent = questions[questionNumber].title[i];
        questionEl.appendChild(titleHeader);
    }
    questionEl.innerText = questions[questionNumber].title
    console.log(questions)
}





