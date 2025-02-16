// script.js

const questions = [
    {
        question: "Which index is considered the benchmark index of the Indian stock market?",
        choices: ["NIFTY 50", "Sensex", "Dow Jones", "FTSE 100"],
        correctAnswer: "Sensex"
    },
    {
        question: "What does IPO stand for?",
        choices: ["Initial Public Offering", "Investment Portfolio Optimization", "International Public Organization", "Income Property Ownership"],
        correctAnswer: "Initial Public Offering"
    },
    {
        question: "Which regulatory body oversees the Indian stock market?",
        choices: ["RBI", "SEBI", "IRDAI", "NABARD"],
        correctAnswer: "SEBI"
    },
    {
        question: "What is the full form of CAGR, often used to measure investment returns?",
        choices: ["Compound Annual Growth Rate", "Current Asset Growth Ratio", "Calculated Average Gain Return", "Capital Appreciation Growth Rate"],
        correctAnswer: "Compound Annual Growth Rate"
    },
    {
        question: "Which of the following is NOT a type of trading account?",
        choices: ["Demat Account", "Trading Account", "Savings Account", "Commodity Account"],
        correctAnswer: "Savings Account"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}: ${currentQuestion.question}`;

    const answerButtons = Array.from(answerButtonsElement.children);
    
    // Reset button states
    answerButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });

    // Clear previous result
    resultElement.textContent = "";

    for (let i = 0; i < answerButtons.length; i++) {
        const button = answerButtons[i];
        const choiceLetter = String.fromCharCode(65 + i);
        button.textContent = `${choiceLetter}: ${currentQuestion.choices[i]}`;
        button.dataset.choice = currentQuestion.choices[i];
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const answerButtons = Array.from(answerButtonsElement.children);

    // Disable all buttons immediately to prevent double-clicks
    answerButtons.forEach(button => {
        button.disabled = true;
        
        // Highlight correct and incorrect answers
        if (button.dataset.choice === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        } else if (button.dataset.choice === selectedAnswer) {
            button.classList.add("incorrect");
        }
    });

    // Update score and show feedback
    if (isCorrect) {
        score++;
        resultElement.textContent = "Correct! 🎉";
    } else {
        resultElement.textContent = `Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`;
    }

    // Move to next question or end game
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

function endGame() {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    questionElement.textContent = `Game Over! Your score: ${score} out of ${questions.length} (${percentage}%)`;
    
    // Clear answer buttons and add a replay button
    answerButtonsElement.innerHTML = `
        <button onclick="restartGame()" class="answer-button">
            Play Again
        </button>
    `;
    resultElement.textContent = getFeedbackMessage(percentage);
}

function getFeedbackMessage(percentage) {
    if (percentage === 100) return "Perfect score! You're a Stock Market Expert! 🏆";
    if (percentage >= 80) return "Excellent! You really know your stuff! 🌟";
    if (percentage >= 60) return "Good job! Keep learning! 📚";
    return "Keep studying the stock market basics! 💪";
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    answerButtonsElement.innerHTML = `
        <button class="answer-button" data-choice="A">A: </button>
        <button class="answer-button" data-choice="B">B: </button>
        <button class="answer-button" data-choice="C">C: </button>
        <button class="answer-button" data-choice="D">D: </button>
    `;
    loadQuestion();
}

// Event listener for answer buttons
answerButtonsElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("answer-button") && !event.target.disabled) {
        const selectedAnswer = event.target.dataset.choice;
        checkAnswer(selectedAnswer);
    }
});

// Start the game
loadQuestion();