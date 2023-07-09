const questions = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const quesBox = document.getElementById("quesBox"); //quebox que comes here

const optionInputs = document.querySelectorAll(".options"); // all options came here

const loadQuestion = () => {
  // if all ques are submitted
  if (index === total) {
    return endQuiz();
  }

  reset(); //uncheck checked options

  const data = questions[index]; // return question according to the indexes
  quesBox.innerText = `${index + 1}) ${data.question}`; //questions display in the webpage

  optionInputs[0].nextElementSibling.innerText = data.a; //display text of answers of questions on next sibling
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index]; // return question according to the indexes

  const ans = getAnswer();
  //answer checking
  //console.log(ans , data.correct);
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

//return the selected answer/ option
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

//uncheck checked options
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

//end texts at the end of the quiz
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
      <div style="text-align : center">
        <h3> Thanks for playing </h3>
        <h2>${right}/ ${total}  are correct </h2>
      </div>  
      
      `;
};

loadQuestion();
