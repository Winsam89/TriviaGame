const gameTime = document.querySelector(".gameTime");
const btnStart = document.querySelector("#btnStart");

let count = 10;

// timer function
btnStart.addEventListener('click', function(){
    setInterval(function(){
       count -= 1;
       gameTime.textContent = count;
    }, 1000);
});

// variables

const questions = document.querySelector(".questions");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

// questions
let questionsArr = [ {
    question1 : "Which dog can run the fastest?",
    answer1 : "Orcas",
    answer2 : "pugs",
    answer3 : "corgis",
    answer4 : "weiner dogs",
}, {
    question2 : "Which dog is the heaviest",
    answer1 : "Chihuahua",
    answer2 : "Corgis",
    answer3 : "Mini-Pinsher",
    answer4 : "Goofy",
}, {
    question3 : "Which dog is the smartest",
    answer1 : "Chihuahua",
    answer2 : "Corgis",
    answer3 : "Mini-Pinsher",
    answer4 : "Goofy",
}
];

// render questions
let currentQuestion = 0;
function renderQuestion() {
    let q = questions[currentQuestion];

    questions.innerHTML = questionsArr.q.question1;
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
}

renderQuestion();