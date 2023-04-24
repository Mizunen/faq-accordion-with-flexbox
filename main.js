// let questions =  document.querySelectorAll('.question-top');
let questions = document.querySelectorAll('.question');
let questionText = document.querySelectorAll('.question-text');
// let questionTops = document.querySelectorAll('.question-top');
let answers = document.querySelectorAll('.answer');
let arrowIcons = document.querySelectorAll('.icon-container');
let questionsText = [];
let answersText = [];
    
questions.forEach(question =>{
    // console.log(`question is ${question.innerHTML}`);
    // console.log(`questionText is ${question.innerHTML}`);
    questionsText.push(question.innerHTML);
});

answers.forEach(answer =>{
    answersText.push(answer.innerHTML);
});


function getToQuestionRoot(targetElement){
    //get to root element so it can be compared to questions array to find which answer to show and which question icon to rotate
    let element = targetElement;    
    let isRootElement = false;

    if(element.classList.contains("question")){
        isRootElement = true;
    }

    while(!isRootElement){
        element = element.parentElement;
        if (element.classList.contains("question")){
            isRootElement = true;
        }
    } 
    return element;
}

function getAnswer(e){
    // if(!e.target.classList.contains('answer')){
    //     console.log(`e.target is ${e.target.innerHTML}`)
    //     let question = getToQuestionRoot(e.target);
    //     // let questionIndex = questions.indexOf(question);
    //     let questionIndex = Number(question.getAttribute('name'));
    //     let answer = answersText[questionIndex];
    //     answers[questionIndex].classList.toggle('hide');
    //     arrowIcons[questionIndex].classList.toggle('rotate')
    // } else{
    //     let answerIndex = answersText.indexOf(e.target.innerHTML);
    //     answers[answerIndex].classList.toggle('hide');
    //     arrowIcons[answerIndex].classList.toggle('rotate');
    // }
    let question = getToQuestionRoot(e.target);
    let questionIndex = Number(question.getAttribute("name"));
    answers[questionIndex].classList.toggle("hide");
    arrowIcons[questionIndex].classList.toggle("rotate");
    questionText[questionIndex].classList.toggle("bold");
}



questions.forEach(question => {
    question.addEventListener("click", getAnswer);
});