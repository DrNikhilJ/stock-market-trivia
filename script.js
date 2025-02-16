// script.js

const allQuestions = [
    {
        question: "What is the 'Options Greeks' term for time decay sensitivity?",
        choices: ["Theta", "Delta", "Gamma", "Vega"],
        correctAnswer: "Theta"
    },
     {
        question: "Which index is considered the benchmark index of the Indian stock market?",
        choices: ["NIFTY Bank", "Sensex", "Dow Jones", "FTSE 100"],
        correctAnswer: "Sensex"
    },
    {
        question: "What is the Japanese term for a candlestick pattern showing prices opening and closing at their highs?",
        choices: ["Doji", "White Marubozu", "Harami", "Tenkan"],
        correctAnswer: "White Marubozu"
    },
    {
        question: "What is the Sortino Ratio used to measure?",
        choices: [
            "Downside deviation of returns",
            "Market volatility",
            "Portfolio diversification",
            "Trading volume"
        ],
        correctAnswer: "Downside deviation of returns"
    },
    {
        question: "Which debt instrument has the highest priority in case of company liquidation?",
        choices: ["Debentures", "Secured Bonds", "Unsecured Bonds", "Convertible Bonds"],
        correctAnswer: "Secured Bonds"
    },
    {
        question: "What is the minimum trading unit for gold futures on MCX?",
        choices: ["1 gram", "10 grams", "100 grams", "1 kg"],
        correctAnswer: "10 grams"
    },
[... Previous questions from index 5 to 50 remain exactly the same ...]
    {
        question: "What is the Elliott Wave Theory's basic pattern?",
        choices: [
            "5 waves up, 3 waves down",
            "3 waves up, 2 waves down",
            "8 waves up, 5 waves down",
            "2 waves up, 2 waves down"
        ],
        correctAnswer: "5 waves up, 3 waves down"
    },
    {
        question: "Which ratio indicates a company's ability to meet short-term obligations?",
        choices: ["Current Ratio", "P/E Ratio", "Debt-Equity Ratio", "ROE"],
        correctAnswer: "Current Ratio"
    },
    {
        question: "What is the maximum permissible leverage in currency futures trading?",
        choices: ["20x", "50x", "100x", "30x"],
        correctAnswer: "30x"
    },
    {
        question: "In technical analysis, what does RSI stand for?",
        choices: [
            "Relative Strength Index",
            "Retail Sales Indicator",
            "Risk Sensitivity Index",
            "Revenue Stream Indicator"
        ],
        correctAnswer: "Relative Strength Index"
    },
    {
        question: "What is 'Put-Call Parity' in options trading?",
        choices: [
            "Relationship between put and call prices",
            "Equal number of puts and calls",
            "Options strike price balance",
            "Option premium calculation"
        ],
        correctAnswer: "Relationship between put and call prices"
    },
    {
        question: "Which pattern is considered a continuation pattern in technical analysis?",
        choices: ["Flag", "Double Top", "Head and Shoulders", "Diamond Top"],
        correctAnswer: "Flag"
    },
    {
        question: "What is the Fibonacci retracement level considered strongest for support?",
        choices: ["61.8%", "50%", "38.2%", "23.6%"],
        correctAnswer: "61.8%"
    },
    {
        question: "What does NBFC stand for in Indian financial markets?",
        choices: [
            "Non-Banking Financial Company",
            "National Banking Finance Corporation",
            "New Banking Financial Committee",
            "National Business Finance Council"
        ],
        correctAnswer: "Non-Banking Financial Company"
    },
    {
        question: "Which of these is NOT a type of market auction in India?",
        choices: ["Cross Auction", "Call Auction", "Block Deal", "Basket Trading"],
        correctAnswer: "Cross Auction"
    },
    {
        question: "What is the minimum investment in government securities through RBI Retail Direct?",
        choices: ["₹10,000", "₹5,000", "₹1,000", "₹50,000"],
        correctAnswer: "₹10,000"
    },
    {
        question: "What is the concept of 'Beta Slippage' in leveraged ETFs?",
        choices: [
            "Decay of returns over time",
            "Trading commission",
            "Market volatility",
            "Price tracking error"
        ],
        correctAnswer: "Decay of returns over time"
    },
    {
        question: "Which tax-saving mutual fund has the shortest lock-in period?",
        choices: ["ELSS", "PPF", "NSC", "Tax-Saving FD"],
        correctAnswer: "ELSS"
    },
    {
        question: "What is the minimum net worth requirement for a portfolio management service in India?",
        choices: ["₹5 crore", "₹2 crore", "₹10 crore", "₹1 crore"],
        correctAnswer: "₹5 crore"
    },
    {
        question: "What is 'Backwardation' in futures markets?",
        choices: [
            "Spot price higher than futures price",
            "Futures price higher than spot price",
            "Equal spot and futures prices",
            "No price correlation"
        ],
        correctAnswer: "Spot price higher than futures price"
    },
    {
        question: "Which of these is a leading economic indicator?",
        choices: ["PMI", "GDP", "Unemployment Rate", "CPI"],
        correctAnswer: "PMI"
    },
    {
        question: "What is the minimum investment amount required for Systematic Investment Plans (SIPs) in most mutual funds?",
        choices: ["₹100", "₹500", "₹1000", "₹5000"],
        correctAnswer: "₹500"
    },
    {
        question: "What is 'anchoring bias' in investing?",
        choices: [
            "Relying too heavily on the first piece of information received",
            "Always investing in blue-chip stocks",
            "Following market trends blindly",
            "Investing only in familiar companies"
        ],
        correctAnswer: "Relying too heavily on the first piece of information received"
    },
    {
        question: "Which of these is a defensive sector in the Indian stock market?",
        choices: ["FMCG", "Real Estate", "Metal", "Banking"],
        correctAnswer: "FMCG"
    },
    {
        question: "What is the trading time for the equity market in India?",
        choices: ["9:15 AM to 3:30 PM", "9:00 AM to 4:00 PM", "10:00 AM to 5:00 PM", "9:30 AM to 4:30 PM"],
        correctAnswer: "9:15 AM to 3:30 PM"
    },
    {
        question: "What is 'herding' in behavioral finance?",
        choices: [
            "Following what other investors are doing",
            "Investing in agricultural stocks",
            "Diversifying portfolio",
            "Trading in penny stocks"
        ],
        correctAnswer: "Following what other investors are doing"
    },
    {
        question: "Which of these is NOT a type of market order?",
        choices: ["Stop Loss", "Limit Order", "Margin Order", "Market Order"],
        correctAnswer: "Margin Order"
    },
    {
        question: "What is the minimum public shareholding required for a company to remain listed on Indian stock exchanges?",
        choices: ["25%", "10%", "35%", "51%"],
        correctAnswer: "25%"
    },
    {
        question: "What is 'confirmation bias' in investing?",
        choices: [
            "Seeking information that confirms existing beliefs",
            "Verifying stock prices regularly",
            "Checking company financials",
            "Following broker recommendations"
        ],
        correctAnswer: "Seeking information that confirms existing beliefs"
    },
    {
        question: "Which index represents mid-cap companies in India?",
        choices: ["Nifty Midcap 100", "Sensex Next 50", "BSE 200", "Nifty 100"],
        correctAnswer: "Nifty Midcap 100"
    },
    {
        question: "What is the capital gains tax holding period for equity investments to be considered long-term?",
        choices: ["1 year", "2 years", "3 years", "5 years"],
        correctAnswer: "1 year"
    },
    {
        question: "What is 'loss aversion' in behavioral finance?",
        choices: [
            "Feeling more pain from losses than pleasure from gains",
            "Avoiding all risky investments",
            "Selling stocks at a loss",
            "Not investing in bear markets"
        ],
        correctAnswer: "Feeling more pain from losses than pleasure from gains"
    },
    {
        question: "What is the full form of ASBA in IPO applications?",
        choices: [
            "Application Supported by Blocked Amount",
            "Automated Stock Buying Application",
            "Advanced Share Booking Amount",
            "Authorized Stock Broker Account"
        ],
        correctAnswer: "Application Supported by Blocked Amount"
    },
    {
        question: "Which of these is NOT a stock market index in India?",
        choices: ["KOSPI", "Nifty Bank", "BSE SmallCap", "Nifty IT"],
        correctAnswer: "KOSPI"
    },
    {
        question: "What is the 'disposition effect' in investing?",
        choices: [
            "Selling winning stocks too early and holding losing stocks too long",
            "Buying stocks at market open",
            "Trading based on news",
            "Investing in IPOs only"
        ],
        correctAnswer: "Selling winning stocks too early and holding losing stocks too long"
    },
    {
        question: "What is the minimum lot size for trading in F&O segment?",
        choices: ["Market Lot", "100 shares", "50 shares", "500 shares"],
        correctAnswer: "Market Lot"
    },
    {
        question: "Which regulatory body governs mutual funds in India?",
        choices: ["SEBI", "RBI", "AMFI", "IRDA"],
        correctAnswer: "SEBI"
    },
    {
        question: "What is 'recency bias' in investing?",
        choices: [
            "Giving more importance to recent events",
            "Investing in new companies only",
            "Following latest market trends",
            "Trading based on past performance"
        ],
        correctAnswer: "Giving more importance to recent events"
    },
    {
        question: "What is the typical circuit breaker limit for individual stocks in Indian markets?",
        choices: ["20%", "10%", "15%", "5%"],
        correctAnswer: "20%"
    },
    {
        question: "Which of these is considered a penny stock in India?",
        choices: [
            "Stock trading below ₹10",
            "Stock with market cap below ₹100 crore",
            "Stock with zero trading volume",
            "Stock listed only on BSE"
        ],
        correctAnswer: "Stock trading below ₹10"
    },
    {
        question: "What is 'mental accounting' in behavioral finance?",
        choices: [
            "Treating money differently based on its source",
            "Calculating profits daily",
            "Maintaining trading records",
            "Planning tax savings"
        ],
        correctAnswer: "Treating money differently based on its source"
    },
    {
        question: "What is the maximum number of members allowed in a trading group?",
        choices: ["50", "100", "200", "No limit"],
        correctAnswer: "50"
    },
    {
        question: "Which of these is NOT a type of mutual fund?",
        choices: ["Leverage Fund", "Index Fund", "Debt Fund", "Hybrid Fund"],
        correctAnswer: "Leverage Fund"
    },
    {
        question: "What is 'overconfidence bias' in investing?",
        choices: [
            "Overestimating one's investment abilities",
            "Taking excessive risks",
            "Trading frequently",
            "Following expert advice blindly"
        ],
        correctAnswer: "Overestimating one's investment abilities"
    },
    {
        question: "What is the settlement cycle for equity trades in India?",
        choices: ["T+1", "T+2", "T+3", "T+5"],
        correctAnswer: "T+1"
    },
    {
        question: "Which index tracks the performance of PSU banks?",
        choices: ["Nifty PSU Bank", "BSE PSU", "Nifty Bank", "BSE Bankex"],
        correctAnswer: "Nifty PSU Bank"
    },
    {
        question: "What is 'halo effect' in investing?",
        choices: [
            "Extending positive impressions of one aspect to everything",
            "Investing in popular stocks",
            "Following market leaders",
            "Buying stocks during bull runs"
        ],
        correctAnswer: "Extending positive impressions of one aspect to everything"
    },
    {
        question: "What is the minimum investment required for a retail investor in an IPO?",
        choices: ["One lot", "100 shares", "₹15,000", "₹10,000"],
        correctAnswer: "One lot"
    },
    {
        question: "Which of these is a market breadth indicator?",
        choices: ["Advance-Decline Ratio", "P/E Ratio", "Dividend Yield", "Book Value"],
        correctAnswer: "Advance-Decline Ratio"
    },
    {
        question: "What is 'self-attribution bias' in investing?",
        choices: [
            "Taking credit for successes but blaming failures on external factors",
            "Making all investment decisions alone",
            "Not following market advice",
            "Avoiding professional help"
        ],
        correctAnswer: "Taking credit for successes but blaming failures on external factors"
    },
    {
        question: "What is the face value of most stocks in India?",
        choices: ["₹10", "₹100", "₹1", "₹5"],
        correctAnswer: "₹10"
    },
    {
        question: "Which agency provides credit ratings for Indian companies?",
        choices: ["CRISIL", "NASDAQ", "BSE", "NSE"],
        correctAnswer: "CRISIL"
    },
    {
        question: "What is 'home bias' in investing?",
        choices: [
            "Preferring to invest in domestic markets",
            "Investing in real estate only",
            "Trading from home",
            "Following local brokers"
        ],
        correctAnswer: "Preferring to invest in domestic markets"
    },
    {
        question: "What is the minimum capital required for day trading in India?",
        choices: ["₹50,000", "₹1,00,000", "₹25,000", "No minimum requirement"],
        correctAnswer: "No minimum requirement"
    },
    {
        question: "Which of these is NOT a valid stop loss order type?",
        choices: ["Trailing Profit", "Trailing Stop", "Stop Limit", "Stop Market"],
        correctAnswer: "Trailing Profit"
    },
    {
        question: "What is 'regret aversion' in behavioral finance?",
        choices: [
            "Making decisions to avoid feeling regret later",
            "Never selling at a loss",
            "Avoiding risky investments",
            "Not investing in bear markets"
        ],
        correctAnswer: "Making decisions to avoid feeling regret later"
    },
    {
        question: "What is the minimum market capitalization for a company to be included in Nifty 50?",
        choices: ["₹5,000 crore", "₹10,000 crore", "₹15,000 crore", "₹20,000 crore"],
        correctAnswer: "₹5,000 crore"
    },
    {
        question: "Which of these is a volatility index in India?",
        choices: ["India VIX", "VSI", "INX", "VOL 50"],
        correctAnswer: "India VIX"
    },
    {
        question: "What is 'availability bias' in investing?",
        choices: [
            "Overemphasizing easily recalled information",
            "Trading only in liquid stocks",
            "Following readily available advice",
            "Investing in popular stocks"
        ],
        correctAnswer: "Overemphasizing easily recalled information"
    },
    {
        question: "What is the maximum permissible investment in tax-saving ELSS mutual funds under Section 80C?",
        choices: ["₹1.5 lakh", "₹2 lakh", "₹1 lakh", "₹50,000"],
        correctAnswer: "₹1.5 lakh"
    },
    {
        question: "Which of these is NOT a valid chart pattern?",
        choices: ["Triple Bottom", "Diamond Top", "Square Head", "Head and Shoulders"],
        correctAnswer: "Square Head"
    },
    {
        question: "What is 'hindsight bias' in investing?",
        choices: [
            "Believing past events were predictable",
            "Learning from past mistakes",
            "Following historical trends",
            "Using past performance for prediction"
        ],
        correctAnswer: "Believing past events were predictable"
    },
    {
        question: "What is the minimum ticket size for investing in REITs in India?",
        choices: ["₹50,000", "₹10,000", "₹1,00,000", "₹25,000"],
        correctAnswer: "₹50,000"
    },
    {
        question: "Which of these is a defensive investment strategy?",
        choices: ["Dollar-Cost Averaging", "Momentum Trading", "Day Trading", "Swing Trading"],
        correctAnswer: "Dollar-Cost Averaging"
    },
    {
        question: "What is 'representative bias' in investing?",
        choices: [
            "Making decisions based on stereotypes",
            "Following market representatives",
            "Investing in index funds",
            "Trading based on tips"
        ],
        correctAnswer: "Making decisions based on stereotypes"
    },
    {
        question: "What is the maximum number of stocks allowed in a single order in India?",
        choices: ["No limit", "10,000", "5,000", "1,000"],
        correctAnswer: "No limit"
    },
    {
        question: "Which of these is NOT a valid candlestick pattern?",
        choices: ["Triple Cross", "Doji", "Hammer", "Shooting Star"],
        correctAnswer: "Triple Cross"
    },
    {
        question: "What is 'status quo bias' in investing?",
        choices: [
            "Preference to keep things as they are",
            "Following market trends",
            "Maintaining portfolio balance",
            "Sticking to blue-chip stocks"
        ],
        correctAnswer: "Preference to keep things as they are"
    },
    {
        question: "What is the standard lot size for currency futures in India?",
        choices: ["USD 1000", "USD 500", "USD 2000", "USD 5000"],
        correctAnswer: "USD 1000"
    },
    {
        question: "Which of these is considered a leading indicator?",
        choices: ["Nifty Bank", "GDP Growth", "Inflation Rate", "Unemployment Rate"],
        correctAnswer: "Nifty Bank"
    },
    {
        question: "What is 'cognitive dissonance' in investing?",
        choices: [
            "Mental discomfort from conflicting beliefs",
            "Analysis paralysis",
            "Fear of trading",
            "Market uncertainty"
        ],
        correctAnswer: "Mental discomfort from conflicting beliefs"
    },
    {
        question: "What is the margin requirement for intraday equity trading in India?",
        choices: ["SPAN + Exposure Margin", "50%", "100%", "20%"],
        correctAnswer: "SPAN + Exposure Margin"
    },
    {
        question: "Which of these is NOT a valid market timing strategy?",
        choices: ["Reverse Averaging", "Value Averaging", "Rupee Cost Averaging", "Lump Sum Investing"],
        correctAnswer: "Reverse Averaging"
    }
];

// New configuration object for game settings
const gameConfig = {
    maxQuestions: 50,  // Maximum questions per game
    questionTimeout: 2000  // Time between questions in milliseconds
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultElement = document.getElementById("result");

function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initializeGame() {
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    
    // Get fresh shuffled questions
    currentQuestions = shuffleArray(allQuestions).slice(0, gameConfig.maxQuestions);
    
    // Reset UI
    answerButtonsElement.innerHTML = `
        <button class="answer-button" data-choice="A">A: </button>
        <button class="answer-button" data-choice="B">B: </button>
        <button class="answer-button" data-choice="C">C: </button>
        <button class="answer-button" data-choice="D">D: </button>
    `;
    
    console.log(`Game initialized with ${currentQuestions.length} questions`); // Debug log
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const shuffledChoices = shuffleArray(currentQuestion.choices);
    
    // Update question text with progress
    questionElement.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}: ${currentQuestion.question}`;
    
    console.log(`Loading question ${currentQuestionIndex + 1} of ${currentQuestions.length}`); // Debug log

    const answerButtons = Array.from(answerButtonsElement.children);
    
    // Reset button states
    answerButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });

    // Clear previous result
    resultElement.textContent = "";

    // Update buttons with shuffled choices
    answerButtons.forEach((button, index) => {
        const choiceLetter = String.fromCharCode(65 + index);
        button.textContent = `${choiceLetter}: ${shuffledChoices[index]}`;
        button.dataset.choice = shuffledChoices[index];
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const answerButtons = Array.from(answerButtonsElement.children);

    // Disable all buttons immediately
    answerButtons.forEach(button => {
        button.disabled = true;
        
        if (button.dataset.choice === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        } else if (button.dataset.choice === selectedAnswer && !isCorrect) {
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
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, gameConfig.questionTimeout);
}

function endGame() {
    const percentage = ((score / currentQuestions.length) * 100).toFixed(1);
    questionElement.textContent = `Game Over! Your score: ${score} out of ${currentQuestions.length} (${percentage}%)`;
    
    answerButtonsElement.innerHTML = `
        <button onclick="restartGame()" class="answer-button">
            Play Again
        </button>
    `;
    resultElement.textContent = getFeedbackMessage(percentage);
    
    console.log(`Game ended. Final score: ${score}/${currentQuestions.length}`); // Debug log
}

function getFeedbackMessage(percentage) {
    if (percentage === 100) return "Perfect score! You're a Stock Market Expert! 🏆";
    if (percentage >= 80) return "Excellent! You really know your stuff! 🌟";
    if (percentage >= 60) return "Good job! Keep learning! 📚";
    if (percentage >= 40) return "Not bad! Keep studying! 📈";
    return "Keep studying the stock market basics! 💪";
}

function restartGame() {
    initializeGame();
}

// Event listener for answer buttons
answerButtonsElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("answer-button") && !event.target.disabled) {
        const selectedAnswer = event.target.dataset.choice;
        checkAnswer(selectedAnswer);
    }
});

// Start the game when the page loads
window.addEventListener('load', () => {
    console.log('Game starting...'); // Debug log
    initializeGame();
});
