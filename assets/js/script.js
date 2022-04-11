
var startButton = document.getElementById("start-button");
var question = document.getElementById("question");
var timerEl = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var endScreen = document.getElementById("end-quiz");
var finalScore = document.getElementById("final-score");
var time = 3;

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

