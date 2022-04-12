var questionInfo = [
    {
        number: 1,
        displayNumber: "1",
        prompt: 'What is 1 + 2 ?',
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        correctIndex: 3
    },
    {
        number: 2,
        displayNumber: "2",
        prompt: 'What is 1 + 3 ?',
        answer1: "2",
        answer2: "4",
        answer3: "6",
        answer4: "8",
        correctIndex: 2
    },
    {
        number: 3,
        displayNumber: "3",
        prompt: 'What is 1 + 4 ?',
        answer1: "3",
        answer2: "5",
        answer3: "8",
        answer4: "12",
        correctIndex: 2
    }
  ]


var startButton = document.getElementById("start-button");
var submitButton = document.getElementById("submit-question");
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var optionOne = document.getElementById('option-one');
var optionTwo = document.getElementById('option-two');
var optionThree = document.getElementById('option-three');
var optionFour = document.getElementById('option-four');
var question = document.getElementById("question");
var timerEl = document.getElementById("timer");
var instructions = document.getElementById("instructions");
var endScreen = document.getElementById("end-quiz");
var finalScore = document.getElementById("final-score");
var questionPrompt = document.getElementById("question-prompt");
var questionTitle = document.getElementById("question-title");
var currentQuestion = 0;
var time = 1000;

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
// answerButtonOne.addEventListener('click', chooseAnswerOne);
// answerButtonTwo.addEventListener('click', chooseAnswerTwo);
// answerButtonThree.addEventListener('click', chooseAnswerThree);
// answerButtonFour.addEventListener('click', chooseAnswerFour);


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
    loadQuestion();
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

function loadQuestion() {

    console.log(currentQuestion)
    questionTitle.textContent = "Question " + questionInfo[currentQuestion].displayNumber;
    questionPrompt.textContent = questionInfo[currentQuestion].prompt;
    optionOne.textContent = questionInfo[currentQuestion].answer1;
    optionTwo.textContent = questionInfo[currentQuestion].answer2;
    optionThree.textContent = questionInfo[currentQuestion].answer3;
    optionFour.textContent = questionInfo[currentQuestion].answer4;

}

// store chosen answer 
function chooseAnswerOne() {
    if (correctIndex === 1) {
        correctChosen()
    } else {
        incorrectChosen()
    }
}

function chooseAnswerTwo() {
    if (correctIndex === 2) {
        correctChosen()
    } else {
        incorrectChosen()
    }
}

function chooseAnswerThree() {
    if (correctIndex === 3) {
        correctChosen()
    } else {
        incorrectChosen()
    }
}

function chooseAnswerFour() {
    if (correctIndex === 4) {
        correctChosen()
    } else {
        incorrectChosen()
    }
}

// End quiz logic
function endQuiz() {
    changeVisibility(question);
    changeVisibility(endScreen);
    finalScore.textContent = "Final Score: " + time;
}

// When submit button is clicked on a question screen
function submitAnswer() {

    if (currentQuestion < questionInfo.length - 1) {
        currentQuestion++;
    }
    loadQuestion();
    // if (currentQuestion === 2) {
    //     endQuiz();
    // }
}