
// Create a variable for all the quiz with objects within an array

const quizContent = [

    {
        "question": "What Are The Spawn Of Ungoliant 1?",
        "options": ["Giant Spiders", "Orcs", "Goblins", "Wargs"],
        "correctAnswer": "Giant Spiders"
    },

    {
        "question": "What Is The Elven Name For Hobbits 2 ?",
        "options": ["Mellon", "The Periannath", "Dunedian", "Nogoth"],
        "correctAnswer": "The Periannath"
    },

    {
        "question": "How Many Rings Of Power Were Forged 3?",
        "options": ["10","18","21", "20"],
        "correctAnswer": "20"
    },

    {
        "question": "How Old Was Aragorn When He Was Laid To Rest 4?",
        "options": ["147", "107", "87", "210"],
        "correctAnswer": "210"
    },

    {
        "question": "Which River Is Rivendell Built On 5?",
        "options": ["147", "107", "87", "210"],
        "correctAnswer": "210"
    },

    {
        "question": "Which Of These Is A 'Pipe-Weed' from The Shire 6?",
        "options": ["The Golden Perch", "The Green Dragon", "The Prancing Pony", "The Southern Star"],
        "correctAnswer": "The Southern Star"
    },

    {
        "question": "What Sindarin Word was Aragon Known By 7?",
        "options": ["Estel", "Amdir", "Aeluin", "Miriel"],
        "correctAnswer": "Estel"
    },

    {
        "question": "What Are 'Durin's Folk' Known As In The Common Tongue 8?",
        "options": ["Hobbits", "Forest Elves", "Men Of Rohan", "Dwarves"],
        "correctAnswer": "Dwarves"
    },

    {
        "question": "Which Hobbit Does BIlbo Share His Birthday With 9?",
        "options": ["Sam", "Frodo", "Merry", "Pipin"],
        "correctAnswer": "Pipin"
    },

];


// •	Landing page will have a heading and, description of the quiz and a challenge message
// •	“Start Quiz “ Button will start the quiz and hide the landing page
// •	Clicking on an answer will indicate correct / wrong, update score
// •	Next Button will bring out next question
// •	On completion of all answers – Result page is called with result displayed and a button to try again
// •	Try again button resets quiz to the beginning - reset function

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

const lotrApp = {};

// Start Button - Hide HeaderContainer ✔ - Button should also unhide the quiz container XX

$('#startQuiz').on('click',function() {
    $('.headerContainer').remove();
    $('main').show();
})


$(function () {
    $('main').hide();
});





