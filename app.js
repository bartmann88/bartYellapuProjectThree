
// Create a variable for all the quiz with objects within an array

const quizContent = [

    {
        "question": "What Are The Spawn Of Ungoliant?",
        "options": ["Giant Spiders", "Orcs", "Goblins", "Wargs"],
        // options are arrays within an object
        "correctAnswer": "Giant Spiders"
    },

    {
        "question": "What Is The Elven Name For Hobbits?",
        "options": ["Mellon", "The Periannath", "Dunedian", "Nogoth"],
        "correctAnswer": "The Periannath"
    },

    {
        "question": "How Many Rings Of Power Were Forged?",
        "options": ["10","18","21", "20"],
        "correctAnswer": "20"
    },

    {
        "question": "How Old Was Aragorn When He Was Laid To Rest?",
        "options": ["147", "107", "87", "210"],
        "correctAnswer": "210"
    },

    {
        "question": "Which River Is Rivendell Built On?",
        "options": ["147", "107", "87", "210"],
        "correctAnswer": "210"
    },

    {
        "question": "Which Of These Is A 'Pipe-Weed' from The Shire?",
        "options": ["The Golden Perch", "The Green Dragon", "The Prancing Pony", "The Southern Star"],
        "correctAnswer": "The Southern Star"
    },

    {
        "question": "What Sindarin Word was Aragon Known By?",
        "options": ["Estel", "Amdir", "Aeluin", "Miriel"],
        "correctAnswer": "Estel"
    },

    {
        "question": "What Are 'Durin's Folk' Known As In The Common Tongue?",
        "options": ["Hobbits", "Forest Elves", "Men Of Rohan", "Dwarves"],
        "correctAnswer": "Dwarves"
    },

    {
        "question": "Which Hobbit Does BIlbo Share His Birthday With?",
        "options": ["Sam", "Frodo", "Merry", "Pipin"],
        "correctAnswer": "Pipin"
    },

];

let score = 0;
let gameOver = false;
let questionsLeft = 5;


