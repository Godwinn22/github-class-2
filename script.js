const quizData = [
    {
        Question: "Which Language runs in a web browser?",
        a: "Java",
        b: "Python",
        c: "C",
        d: "Javascript",
        Correct: "d",
    },
    {
        Question: "Which Language creates mobile apps?",
        a: "Java",
        b: "Python",
        c: "C",
        d: "Javascript",
        Correct: "a",
    },
    {
        Question: "What does HTML means?",
        a: "Java",
        b: "Python",
        c: "HyperText Markup Language",
        d: "Javascript",
        Correct: "c",
    },
    {
        Question: "What does CSS stand for?",
        a: "Java",
        b: "Cascading Style Sheets",
        c: "C",
        d: "Javascript",
        Correct: "b",
    }
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.Question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].Correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()

        }else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
}}})