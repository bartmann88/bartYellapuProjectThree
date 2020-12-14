// Create a variable for all the quiz with objects within an array

const quizContent = [
  {
    question: "What Are The Spawn Of Ungoliant ?",
    options: ["Giant Spiders", "Orcs", "Goblins", "Wargs"],
    correctAnswer: "Giant Spiders",
  },

  {
    question: "What Is The Elven Name For Hobbits ?",
    options: ["Mellon", "The Periannath", "Dunedian", "Nogoth"],
    correctAnswer: "The Periannath",
  },

  {
    question: "How Many Rings Of Power Were Forged ?",
    options: ["10", "18", "21", "20"],
    correctAnswer: "20",
  },

  {
    question: "How Old Was Aragorn When He Was Laid To Rest ?",
    options: ["147", "107", "87", "210"],
    correctAnswer: "210",
  },

  {
    question: "Which Of These Is a 'Pipe-Weed' from The Shire ?",
    options: [
      "The Golden Perch",
      "The Green Dragon",
      "The Prancing Pony",
      "The Southern Star",
    ],
    correctAnswer: "The Southern Star",
  },

  {
    question: "What Sindarin Word was Aragon Known By ?",
    options: ["Estel", "Amdir", "Aeluin", "Miriel"],
    correctAnswer: "Estel",
  },

  {
    question: "What Are 'Durin's Folk' Known As In The Common Tongue ?",
    options: ["Hobbits", "Forest Elves", "Men Of Rohan", "Dwarves"],
    correctAnswer: "Dwarves",
  },

  {
    question: "Which Hobbit Does Bilbo Share His Birthday With ?",
    options: ["Sam", "Frodo", "Merry", "Pipin"],
    correctAnswer: "Pipin",
  },
];

// create an images array

const backgroungImg = [
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr1/LOTR2.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr1/LOTR3.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr1/LOTR4.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr1/LOTR5.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr2/LOTR6.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr2/LOTR7.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr2/LOTR8.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr2/LOTR9.svg",
  "C:UsersBartmanDocumentsWebsitespersonal-projectsJunoweek-4BartYellapuProjectThreeassetsimagessvglotr3/LOTR11.svg",
];

// •	Landing page will have a heading and, description of the quiz and a challenge message
// •	“Start Quiz “ Button will start the quiz and hide the landing page
// •	Clicking on an answer will indicate correct / wrong, update score
// •	Next Button will bring out next question
// •	On completion of all answers – Result page is called with result displayed and a button to try again
// •	Try again button resets quiz to the beginning - reset function

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Start Button - Hide HeaderContainer ✔ - Button should also unhide the quiz container XX

// Key Variables

// This variable will tell us where we are on the Quizcontent array
let questionNumber = 0;

let totalQuestion = quizContent.length;

let score = 0;

// this function will show a question on hTML

const showQuestion = function () {
  $("#question").text(quizContent[questionNumber].question);
  // Hide next button when new question is unanswered
  $("#nextButton").hide();
};

const showOptions = function () {
  quizContent[questionNumber].options.map((option) => {
    $("#optionsContainer").append("<p  class='option'>" + option + "</p>");
  });
};

// function created to check answers
const checkAnswer = function (selectedAnswer) {
  $("#optionsContainer").children("p").hide();

  $("#nextButton").show();
  if (selectedAnswer === quizContent[questionNumber].correctAnswer) {
    console.log("correct anser");
    // Updating Score
    // score = ++score
    $("#score").text(`Score - ${++score}/8`);
    $("#optionsContainer")
      .attr("class", "answer-msg")
      .text(`Correct Answer: ${quizContent[questionNumber].correctAnswer}`);

    $("#result").text("Well Done !").attr("class", "correct");
  } else {
    $("#result").text("Wrong..").attr("class", "wrong");
    $("#optionsContainer")
      .attr("class", "answer-msg")
      .text(`Correct Answer: ${quizContent[questionNumber].correctAnswer}`);
  }
};

const nextQuestion = function () {
  if (quizContent.length - 1 === questionNumber) {
    gameOver();
  } else {
    questionNumber = ++questionNumber;
    showQuestion();
    $("#optionsContainer").html("");
    showOptions();
    $("#optionsContainer")
      .children("p")
      .click(function () {
        checkAnswer($(this).text());
      });
    $("#result").text("");
  }
};

// Question Counter function

// Game over function

const gameOver = function () {
  $("#finalMessage").text("GAME OVER! - Try Again");
  $("main").hide();
  $("header").hide();
  $("section").show();
  $("#finalScore").text(`Your Score is ${score}/8`);
  $("#resetButton")
    .show()
    .click(function () {
      resetGame();
    });
};

const resetGame = function () {
  score = 0;
  questionNumber = 0;
  $("#nextButton").hide();
  $("#finalMessage").text("");
  $("#finalScore").text("");
  $("#resetButton").hide();
  $("main").show();
  $("#score").text(`Score - ${score}/8`);
  showQuestion();

  $("#optionsContainer").html("");
  showOptions();
  $("#result").text("");
  $("#optionsContainer")
    .children("p")
    .click(function () {
      checkAnswer($(this).text());
    });
  if (questionNumber === quizContent.length - 1) {
    gameOver();
  }
};

$(function () {
  $("main").hide();
  $("section").hide();
  $("#resetButton").hide();
  $("#startQuiz").on("click", function () {
    $("#nextButton").hide();
    $(".headerContainer").remove();
    $("header").remove();
    $("main").show();
    $("#score").text(`Score - ${score}/8`);
    showQuestion();
    showOptions();

    // we are selecting all the elements within the OptionsContainer div

    $("#optionsContainer")
      .children("p")
      .click(function () {
        checkAnswer($(this).text());
      });

    $("#nextButton").click(function () {
      nextQuestion();
    });
  });
});
