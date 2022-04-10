
var startButton = document.getElementById("start-button");
var question1 = document.getElementById("question-1");
var question2 = document.getElementById("question-2");
var question3 = document.getElementById("question-3");
var question4 = document.getElementById("question-4");
var instructions = document.getElementById("instructions");
var time = 100;
var score = 100;

startButton.addEventListener('click', startQuiz);

function changeVisibility(element) {
    if (element.className === "hidden") {
      element.className = "visible";
    } else if (element.className === "visible") {
      element.className = "hidden";
    } else {
        alert("Error in changing visibility");
    }
}

function startQuiz() {
    changeVisibility(question1);
    changeVisibility(instructions);
}