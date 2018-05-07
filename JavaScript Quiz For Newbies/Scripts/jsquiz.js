// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit';)
// Way of defining our HTML divs for the quiz.


// Above is how you build questions and build results when a user hits submit

// To display the quiz questions:
(function(){
const myQuestions = [
  {
    question: "What is the difference between Java & Javascript?",
  answers: {
    a: "Nothing, they are both the same!",
    b: "JavaScript is an OOP programming language and Java is a OOP scripting lanaugage!",
    c: "Java is an OOP programming language and JavaScript is a OOP scripting language!"
  },
  correctAnswer: "c"
},
{
  question:"Which programming language when written can only run on a browser?",
answers: {
  a: "Both",
  b: "JavaScript",
  c: "Java"
},
correctAnswer: "b"
},

{
  question:"What do you put at the end of a JavaScript code to run your code?",
  answers: {
    a: "print(variablehere)",
    b: "console.log(variablehere)",
    c:"I don't know"
  },
  correctAnswer: "b"
},
{
  question:"What operator do you use when you want to tell JavaScript to only run when a AND b conditions are met?",
  answers: {
  a: "&&",
  b: "$$",
  c: "and"
},
 correctAnswer: "a"
},
{
  question:"What operator do you use when you want to tell JavaScript to only run when a OR b conditions are met?",
answers: {
  a: "$$",
  b: "//",
  c: "||"
},
correctAnswer: "c"

},
{
  question:"How do you overwrite(redefine an already defined variable?",
answers: {
  a: "Remove let",
  b: "Just write a new variable in",
  c: "I don't know"

},
correctAnswer: "a"
},

{
  question: "What is the correct format of an if statement in Javascript with a string?",
  answers: {
    a: "If whats?",
    b: "if + condition + { console.log ('string')}",
    c: " if + condition + string"
  },
  correctAnswer: "b"
},
{
  question: "Choose the right form of camelcasing for the word camelcasing:",
  answers: {
    a:"Camelcasing",
    b:"camelcasing",
    c: "camelCasing"
  },
  correctAnswer: "c"
},
{
  question: "Are semicolons necessary in Javascript?",
  answers: {
    a:"Yes",
    b: "No",
    c: "Sometimes"
  },
  correctAnswer: "b"
},
{
  question:"How many values can booleans have in JavaScript and what are they?",
  answers:{
    a:"Two True/False",
    b:"As many as you want",
    c:"Up to four only True/False, Up/Down,"
  },
  correctAnswer: "a"
}
];
function buildQuiz(){
  // A place to store HTML output
  const output = [];
  // for each //

  myQuestions.forEach((currentQuestion,questionNumber) => {
const answers = [];

// for each available answers
for(letter in currentQuestion.answers){
  // Add in radio button here
answers.push(
`<label>
<input type="radio" name="question${questionNumber}"
value="${letter}">
       ${letter} :
       ${currentQuestion.answers[letter]}
       </label>`
     );
  }

  output.push(
    `<div class="slide">
    <div class="question"> ${currentQuestion.question} </div>
    <div class="answers">  ${answers.join("")}
    </div>
    </div>`
  );
});

quizContainer.innerHTML = output.join("");

}

function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");

      // keep track of user's answers
      let numCorrect = 0;

      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });

      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;

      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }

      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();


myQuestions.forEach( (currentQuestion, questionNumber) => {
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) ||{}).value;

if(userAnswer===currentQuestion.correctAnswer){

  numCorrect++;

  answerContainers[questionNumber].style.color ='lightgreen';
}

else{
  answerContainers[questionNumber].style.color = 'red';
}
});

resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;


 function showSlide(n) {
   slides[currentSlide].classList.remove("active-slide");
   slides[n].classList.add("active-slide");
   currentSlide = n;

   if (currentSlide === 0) {
     previousButton.style.display = "none";
   } else {
     previousButton.style.display = "inline-block";
   }

   if (currentSlide === slides.length - 1) {
     nextButton.style.display = "none";
     submitButton.style.display = "inline-block";
   } else {
     nextButton.style.display = "inline-block";
     submitButton.style.display = "none";
   }
 }

 function showNextSlide() {
   showSlide(currentSlide + 1);
 }

 function showPreviousSlide() {
   showSlide(currentSlide - 1);
 }

 const quizContainer = document.getElementById("quiz");
 const resultsContainer = document.getElementById("results");
 const submitButton = document.getElementById("submit");

 // display quiz right away
 buildQuiz();

 const previousButton = document.getElementById("previous");
 const nextButton = document.getElementById("next");
 const slides = document.querySelectorAll(".slide");
 let currentSlide = 0;

 showSlide(0);

 // on submit, show results
 submitButton.addEventListener("click", showResults);
 previousButton.addEventListener("click", showPreviousSlide);
 nextButton.addEventListener("click", showNextSlide);
