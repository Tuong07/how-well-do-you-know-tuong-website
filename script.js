const questions = [
    {
        question: "What is my favorite food?",
        options: ["com tam", "pho", "Burger", "bun thit nuong"],
        correctAnswer: 0
    },
    {
        question: "what is the one sport that I dont play",
        options: ["Football", "Basketball", "Volleyball", "Kick-Boxing"],
        correctAnswer: 3  // fifi you fucking nerd LMFAO get a life !!
    },
    {
        question: "Where did I get sent to for bad behavior as a kid?",
        options: ["Military camp for kids", "Temple", "Back to Taiwan", "To a church"],
        correctAnswer: 1
    },
   
    {
        question: "at what age did I get sent away as a kid",
        options: ["14", "10", "11", "12"],
        correctAnswer: 2
    },
    {
        question: "why did I get sent away as a kid",
        options: ["for stealing classmate's money", "driving moped at night", "cussing at my mom", "doing bad in school"],
        correctAnswer: 1
    },
    {
        question: "whats the one thing I've never done in my life",
        options: ["broke the window of a random car", "threw a rock and denting the roof of a random car", "eating a fried rat", "pooping on car during a road trip"],
        correctAnswer: 3
    },
    {
        question: "how tall am I?",
        options: ["180", "182", "184", "189"],
        correctAnswer: 3
    },
    {
        question: "one thing I've never seen in real life",
        options: ["a real gun", "a real sword", "a dildo", "a dead body"],
        correctAnswer: 2
    },
    {
        question: "at what year did I become black",
        options: ["primary", "year 5", "year 7", "year 2"],
        correctAnswer: 3
    },
    {
        question: "How many times did I get kicked out of the classroom at bvis",
        options: ["3", "5", "12", "18"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const finalScore = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');


function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    showQuestion();
}


function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    nextButton.style.display = 'none';
    resultContainer.style.display = 'none';
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const options = optionsContainer.children;
    

    for (let option of options) {
        option.style.pointerEvents = 'none';
    }
    

    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        scoreDisplay.textContent = score;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correctAnswer].classList.add('correct');
    }
    
    nextButton.style.display = 'block';
}


function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    questionText.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    finalScore.textContent = score;
}


nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', () => {
    questionText.style.display = 'block';
    optionsContainer.style.display = 'block';
    initQuiz();
});


initQuiz(); 