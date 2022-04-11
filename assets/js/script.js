
var startButton = document.getElementById("start-button");
var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");
var timerEl = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var time = 5;

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
    changeVisibility(question1);
    startTimer();
}

function startTimer() {

    var timerInterval = setInterval(function() {
        timerEl.textContent = "Timer: " + time;
        time--;
        if (time === -1) {
            clearInterval(timerInterval);
        } 
    }, 1000);


}

