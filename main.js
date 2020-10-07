// CONTENT
const content = [
    {
        term: "Jessica Bishop",
        sentences: [
            "Jessica Bishop is an excellent teacher"
        ],
        classes: [
            "noun"
        ]
    },
    {
        term: "Apple",
        sentences: [
            "He ate an apple", "The tree grew apples", "The apple tree is blossoming", "Apples are a delicious fruit"
        ],
        classes: [
            "noun"
        ]
    },
    {
        term: "Norwood Secondary College",
        sentences: [
            "I go to Norwood Secondary College", "Norwood Secondary College is a public secondary school in Ringwood North"
        ],
        classes: [
            "noun"
        ]
    },
    {
        term: "Watermelon",
        classes: [
            "noun"
        ]
    },
    {
        term: "Pavement",
        classes: [
            "noun"
        ]
    },
    {
        term: "Microphone",
        classes: [
            "noun"
        ]
    },
    {
        term: "Morgan Freeman",
        classes: [
            "noun"
        ]
    },
    {
        term: "Scott Morrisson",
        classes: [
            "noun"
        ]
    },
    {
        term: "Vehicle",
        classes: [
            "noun"
        ]
    },
    {
        term: "Celery",
        classes: [
            "noun"
        ]
    },
    {
        term: "Banana",
        classes: [
            "noun"
        ]
    },
    {
        term: "Patio",
        classes: [
            "noun"
        ]
    },
    {
        term: "Cigarette",
        classes: [
            "noun"
        ]
    },
    {
        term: "Mosquito",
        classes: [
            "noun"
        ]
    },
    {
        term: "Vodka",
        sentences: [
            "Vodka is an alcoholic spirit", "In Soviet Russia, Vodka drink you"
        ],
        classes: [
            "noun"
        ]
    },
    {
        term: "Conventional Oven",
        sentences: [
            "A Conventional Oven is an appliance of the conventional home", "To cook your boneless pizza, preheat your conventional oven to 180 degrees celcius"
        ],
        classes: [
            "noun"
        ]
    },
    {
        term: "Piñata",
        sentences: [
            "A piñata is a decorated container often made of papier-mâché, they are filled with candy prior to their savage destruction.", "He smashed the piñata"
        ],
        classes: [
            "noun"
        ]
    },
    {
        term: "Cook",
        sentences: [
            "I will cook you a Zucchini fritter", "I promise I won't cook your pet fish", "The cook was upset"
        ],
        classes: [
            "verb", "noun"
        ]
    },
    {
        term: "Speak",
        sentences: [
            "She was unable to speak after the donut disaster", "The cockatoo will speak on occasion"
        ],
        classes: [
            "verb"
        ]
    },
    {
        term: "Make",
        sentences: [
            "I made a game on word classes", "I made pumpkin fritters on sunday afternoon", "Make sure the prisoners do not escape", "This pink calculator is our own make"
        ],
        classes: [
            "verb", "noun"
        ]
    },
    {
        term: "Spend",
        sentences: [
            "He can spend his money on Allen's Jelly Babies", "She spent too much time deciding what word class the lexeme spend belongs to", "I spent my time dusting wooden cat sculptures"
        ],
        classes: [
            "verb"
        ]
    },
    {
        term: "Win",
        sentences: [
            "You could win this game if you play enough", "He won the tiramisu after a year of hardwork", "You won!", "This horse is a sure win isn't it Jimmy"
        ],
        classes: [
            "verb", "noun"
        ]
    },
    {
        term: "Follow",
        sentences: [
            "The cat follows the bird", "I will follow you home in the dark when you aren't looking", "After sunlight, darkness followed", "He will follow her to the tasmanian frangipani conference", "You get more follows on instagram if you are good looking"
        ],
        classes: [
            "verb", "noun"
        ]
    },
    {
        term: "Stop",
        sentences: [
            "Please stop puring cranberry juice on the baby", "This is a great stop if you want ice-cream", "Put a stop to Climate Change"
        ],
        classes: [
            "verb", "noun"
        ]
    },
    {
        term: "Accept",
        classes: [
            "verb"
        ]
    },
    {
        term: "Achieve",
        classes: [
            "verb"
        ]
    },
    {
        term: "Act",
        classes: [
            "noun", "verb"
        ]
    },
    {
        term: "Avoid",
        classes: [
            "verb"
        ]
    },
    {
        term: "Blacken",
        classes: [
            "verb"
        ]
    },
    {
        term: "Bleed",
        classes: [
            "verb", "noun"
        ]
    },
    {
        term: "Chase",
        classes: [
            "verb", "noun"
        ]
    },
];
const blacklist = [];

// Retrieve Elements
const gameArea = document.querySelector('.gamearea');
const term = gameArea.querySelector('.gamearea__term');
const answer = gameArea.querySelector('.gamearea__answer');
const options = gameArea.querySelectorAll('.option');
const submitBtn = gameArea.querySelector('.gamearea__submit');

// Option Selection Setup
for(let option = 0; option < options.length; option++) {
    options[option].addEventListener('click', (e) => {
        options[option].classList.toggle('option--selected');
    });
}

// Submit Button Setup
submitBtn.addEventListener('click', submit);

// Submit
function submit() {
    if (submitBtn.innerText === "Start Game") {
        startGame();
    } else if (submitBtn.innerText === "Next Round") {
        loadRound();
    } else { // Done
        checkAnswer();
    }
}

// Start Game
function startGame() {
    loadRound();
}

// Load Round
function loadRound() {
    // Remove correcticons (ticks and crosses)
    let correcticons = gameArea.querySelectorAll('.correcticon')
    for(i=0; i < correcticons.length; i++) {
        correcticons[i].remove();
    }
    // Deselect all options
    for(let option = 0; option < options.length; option++) {
        options[option].classList.remove("option--selected");
    }
    // Set button to Done
    submitBtn.innerText = "Done";
    // Generate new question
    randQn = generateQuestion();
    console.log(blacklist)
    document.querySelector('.gamearea__currentQuestion').innerText = randQn;
    term.innerText = content[randQn].term;
    blacklist.push(randQn)
}

// Check Answer
function checkAnswer() {
    // Get Correct Classes
    let qnno = document.querySelector('.gamearea__currentQuestion').innerText;
    let correctClasses = content[qnno].classes;

    // Initialise totals
    let selectedCorrect = [];
    let selectedIncorrect = [];
    let unselectedIncorrect = [];
    let unselectedCorrect = [];
    
    // Loop through options
    for(let option = 0; option < options.length; option++) {
        // Check if I am needed
        let needed = false;
        // Loop through correct classes
        for(let crntClass = 0; crntClass < correctClasses.length; crntClass++) {
            if (options[option].id === (correctClasses[crntClass])) {
                // I am a correct class
                needed = true;
            }
        }
        // Am I selected or not
        let selected = options[option].classList.contains('option--selected');
        // Evaluate correctness and append appropriate image
        if (selected) {
            if (needed) {
                // Correctly answered
                //selectedCorrect.push(options[option]);
                var correct = document.createElement("img");
                correct.classList.add('correcticon')
                correct.src = "./images/correct.svg";
                correct.alt = "green tick";
                options[option].appendChild(correct);
            } else {
                // Incorrectly answered
                //selectedIncorrect.push(options[option]);
                var incorrect = document.createElement("img");
                incorrect.classList.add('correcticon')
                incorrect.src = "./images/incorrect.svg";
                incorrect.alt = "red cross";
                options[option].appendChild(incorrect);
            }
        } else {
            if (needed) {
                // Incorrectly ignored
                //unselectedIncorrect.push(options[option]);
                var incorrect = document.createElement("img");
                incorrect.classList.add('correcticon')
                incorrect.src = "./images/incorrect.svg";
                incorrect.alt = "red cross";
                options[option].appendChild(incorrect);
            }
        }
    }
    // Finalise
    submitBtn.innerText = "Next Round";
}

// Generate Question
function generateQuestion() {
    let blacklistResetPoint = content.length-Math.floor(content.length/3)
    if (blacklist.length > blacklistResetPoint) blacklist.shift();
    let randQn = Math.floor(Math.random() * content.length);
    for (i=0; i<blacklist.length; i++) { // Go through blacklist
        console.log(`i=${i}`)
        if (blacklist[i] === randQn) { // Repeat Question
            console.log(`${blacklist[i]} === ${randQn}`)
            return generateQuestion();
        }
    }
    return randQn;
}