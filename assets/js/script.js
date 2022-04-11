var questionInfo = [
    {
        number: 1,
        prompt: 'What is 1 + 2 ?',
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
    },
    {
        number: 2,
        prompt: 'What is 1 + 3 ?',
        answer1: "2",
        answer2: "4",
        answer3: "6",
        answer4: "8",
    },
    {
        number: 3,
        prompt: 'What is 1 + 4 ?',
        answer1: "3",
        answer2: "5",
        answer3: "8",
        answer4: "12",
    }
  ]


var startButton = document.getElementById("start-button");
var question = document.getElementById("question");
var timerEl = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var endScreen = document.getElementById("end-quiz");
var finalScore = document.getElementById("final-score");
var questionPrompt = document.getElementById("question-prompt");
var time = 1000;

startButton.addEventListener('click', startQuiz);

function changeVisibility(element) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
      element.classList.add("hidden");
    }
}

function startQuiz() {

    changeVisibility(instructions);
    changeVisibility(question);
    startTimer();
}

function startTimer() {

    var timerInterval = setInterval(function() {
        timerEl.textContent = "Timer: " + time;
        time--;
        if (time === -1) {
            time = 0;
            timerEl.textContent = "Timer: " + time;
            endQuiz();
            clearInterval(timerInterval);
        } 
    }, 1000);
}

function endQuiz() {
    changeVisibility(question);
    changeVisibility(endScreen);
    finalScore.textContent = "Final Score: " + time;
}

