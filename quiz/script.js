// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start");
const questionText = document.getElementById("question-txt");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart");
const progressBar = document.getElementById("progress");
const finalScoreSpan = document.getElementById("final-score");
const finalTotalQuestionsSpan = document.getElementById("final-total-questions");

// Quiz questions
const quizQuestions = [
    {
        question: "what was the species of annie's first pet?",
        answers: [
            { text: "carpenter ant", correct: false },
            { text: "half-moon betta fish", correct: false },
            { text: "red crescent platy", correct: true },
            { text: "guppy", correct: false },
        ],
    },
    {
        question: "what medicine has annie illegally acquired?",
        answers: [
            { text: "what the fuck?", correct: false },
            { text: "amoxicillin", correct: true },
            { text: "riboflaxin", correct: false },
            { text: "cyclobenzaprine", correct: false },
            { text: "phenobarbital", correct: false },
        ],
    },
    {
        question: "what is the tagline for annie's secret blog?",
        answers: [
            { text: "thirteen myrrh moons", correct: false },
            { text: "blog it and weep", correct: false },
            { text: "she doesn't have one", correct: false },
            { text: "annie, you never told me you had a secret blog", correct: true },
        ],
    },
    {
        question: "which food item did annie break a rice cooker trying to make?",
        answers: [
            { text: "tofu chiffon cake", correct: false },
            { text: "bread pudding w/ raisins", correct: false },
            { text: "basque cheesecake", correct: true },
            { text: "rice pudding, sans raisins, but only b/c she didn't have them handy", correct: false },
        ],
    },

    {
        question: "what kind of bread does annie have next to her right now?",
        answers: [
            { text: "raisin bread", correct: false },
            { text: "half-eaten ciabatta", correct: false },
            { text: "red bean bread", correct: true },
            { text: "matcha black sesame bun", correct: false },
        ],
    },
    {
        question: "what is annie procrastinating on right now while making this?",
        answers: [
            { text: "completing work items", correct: false },
            { text: "responding to someone", correct: true },
            { text: "studying for an interview", correct: true },
            { text: "dinner", correct: true },
        ],
    },

];

//quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
finalTotalQuestionsSpan.textContent = quizQuestions.length;

//event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    console.log("quiz started");
    score = 0;
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    answerDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = currentQuestionIndex / quizQuestions.length * 100;
    progressBar.style.width = `${progressPercent}%`;
    console.log(progressPercent, currentQuestionIndex, quizQuestions.length);

    answersContainer.innerHTML = ""; //clear previous answers

    questionText.textContent = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');

        //dataset = property of the element allowing us to store custom data 
        button.dataset.correct = answer.correct;

        button.addEventListener('click', selectAnswer);

        answersContainer.appendChild(button); //actually add it to the UI!
    });
}

function selectAnswer(e) {
    //optimization check
    if (answerDisabled) return;

    answerDisabled = true;
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("wrong");
        }
    });

    if (correct) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResults();
        }
    }, 500);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    finalScoreSpan.textContent = score;
    finalTotalQuestionsSpan.textContent = quizQuestions.length;
    const percent = (score / quizQuestions.length) * 100;
    let msg = "annie's comment: ";
    if (percent >= 80) {
        msg += "waow ur so cool ur a cool cat";
    } else if (percent >= 50) {
        msg += "not bad";
    } else {
        msg += "eek";
    }
    resultMessage.textContent = msg;


}

function restartQuiz() {
    console.log("quiz restarted");
    resultScreen.classList.remove("active");
    startQuiz();
}