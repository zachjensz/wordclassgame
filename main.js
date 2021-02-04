// Initialise content
const op = `<span class="term">`;
const cl = `</span>`;
const content = {
    noun: [
        {
            term: "Teacher",
            class: "Noun",
            sentences: [
                `Jessica Bishop is an excellent ${op}teacher${cl}`, `The ${op}teacher${cl} ate a zucchini fritter.`
            ],
        },
        {
            term: "Apple",
            class: "Noun",
            sentences: [
                `He ate an ${op}apple${cl}`, `The tree grew ${op}apples${cl}`, `The ${op}apple${cl} tree is blossoming`, `${op}Apple${cl} are a delicious fruit`
            ],
        },
        {
            term: "Burrito",
            class: "Noun",
            sentences: [
                `The mexican child ate a ${op}burrito${cl}`, `All the ${op}burritos${cl} are five dollars sir`, `This ${op}burrito${cl} consists of a tortilla folded over a filling of ground beef, grated cheese, and vegetables.`, `${op}Burritos${cl} are a delicious food`
            ],
        },
        {
            term: "Watermelon",
            class: "Noun",
            sentences: [
                `Vodka ${op}watermelons${cl} are excellent`, `${op}Watermelon${cl} is a type of melon`, `${op}Watermelons${cl} are a great shooting target for emulating the human body`
            ],
        },
        {
            term: "Pavement",
            class: "Noun",
            sentences: [
                `The ${op}pavement${cl} is excellent`, `Some ${op}pavements${cl} are referred to as a footpath or sidewalk`, `You can refer to a highway as a ${op}pavement${cl}`
            ],
        },
        {
            term: "Microphone",
            class: "Noun",
            sentences: [
                `The ${op}microphone${cl} is off`, `This ${op}microphone${cl} is great`
            ],
        },
        {
            term: "Morgan Freeman",
            class: "Noun",
            sentences: [
                `${op}Morgan Freeman${cl} is a great actor`
            ],
        },
        {
            term: "Scott Morrisson",
            class: "Noun",
            sentences: [
                `${op}Scott Morrisson${cl} is frequently nicknamed "scomo"`
            ],
        },
        {
            term: "Vehicle",
            class: "Noun",
            sentences: [
                `The ${op}vehicle${cl} is in excellent condition`, `This ${op}vehicle${cl} was sold to a customer`
            ],
        },
        {
            term: "Celery",
            class: "Noun",
            sentences: [
                `The ${op}celery${cl} goes in next`
            ],
        },
        {
            term: "Banana",
            class: "Noun",
            sentences: [
                `The ${op}banana${cl} bender was off work`, `The ${op}bananas${cl} were used for cooking`, `${op}Bananas${cl} are a cheap fruit`
            ],
        },
        {
            term: "Patio",
            class: "Noun",
            sentences: [
                `The ${op}patio${cl} is flooded`
            ],
        },
        {
            term: "Cigarette",
            class: "Noun",
            sentences: [
                `The ${op}cigarette${cl} was lit`
            ],
        },
        {
            term: "Mosquito",
            class: "Noun",
            sentences: [
                `A ${op}mosquito${cl} bit me`, `${op}Mosquitoes${cl} are nicknamed "mozzies" by many Australians`, `I hate ${op}mosquitos${cl}`
            ],
        },
        {
            term: "Vodka",
            class: "Noun",
            sentences: [
                `${op}Vodka${cl} is an alcoholic spirit`, `In Soviet Russia, ${op}vodka${cl} drink you`, `${op}Vodka${cl} is great for cocktails`
            ],
        },
        {
            term: "Conventional Oven",
            class: "Noun",
            sentences: [
                `A ${op}conventional oven${cl} is a normal appliance of the home`, `To cook your boneless pizza, preheat your ${op}conventional oven${cl} to 180 degrees celcius`
            ],
        },
        {
            term: "Piñata",
            class: "Noun",
            sentences: [
                `${op}Piñatas${cl} are a decorated, often papier-mâché container, filled with candy prior to savage destruction`
            ],
        },
        {
            term: "Cook (noun)",
            class: "Noun",
            sentences: [
                `The ${op}cook${cl} was upset`, `Captain ${op}cook${cl} had a ship`
            ],
        },
        {
            term: "Make (noun)",
            class: "Noun",
            sentences: [
                `This car is our ${op}make${cl}`, `This pink calculator is our own ${op}make${cl}`
            ],
        },
        {
            term: "Stop (noun)",
            class: "Noun",
            sentences: [
                `This is a great ${op}stop${cl} if you want ice-cream`
            ],
        },
        {
            term: "Win (noun)",
            class: "Noun",
            sentences: [
                `This horse is a sure ${op}win${cl} isn't it Jimmy`, `My trip to the casino was a huge ${op}win${cl}`
            ],
        },
        {
            term: "Follow (noun)",
            class: "Noun",
            sentences: [
                `She got so many ${op}follows${cl} on Instagram`
            ],
        },
        {
            term: "Act (noun)",
            class: "Noun",
            sentences: [
                `She performed an ${op}act${cl} on the stage`, `His ${op}act${cl} was on frog intoxication`
            ],
        },
        {
            term: "Bleed (noun)",
            class: "Noun",
            sentences: [
                `He has a ${op}bleed${cl} on his left arm`, `The paper has a ${op}bleed${cl} of a couple centimetres`
            ],
        },
        {
            term: "Chase (noun)",
            class: "Noun",
            sentences: [
                `It was a great ${op}chase${cl}`, `The ${op}chase${cl} with the kids was great fun`
            ],
        }
    ],
    verb: [
        {
            term: "Speak",
            class: "Verb",
            sentences: [
                `She was unable to ${op}speak${cl} after the donut disaster`, `The cockatoo will ${op}speak${cl} on occasion`
            ],
        },
        {
            term: "Spend",
            class: "Verb",
            sentences: [
                `He can ${op}spend${cl} his money on Allen's Jelly Babies`, `She spent too much time deciding what word class the lexeme ${op}spend${cl} belongs to`, `I ${op}spent${cl} my time dusting wooden cat sculptures`
            ],
        },
        {
            term: "Accept",
            class: "Verb",
            sentences: [
                `She ${op}accepted${cl} his apology`, `They ${op}accepted${cl} the giant bird statue was here to stay`, `I ${op}accept${cl} this gift`
            ],
        },
        {
            term: "Achieve",
            class: "Verb",
            sentences: [
                `They will ${op}achieve${cl} their best`, `They ${op}achieved${cl} so much more`, `I ${op}achieved${cl}`
            ],
        },
        {
            term: "Avoid",
            class: "Verb",
            sentences: [
                `She ${op}avoided${cl} the goat`, `They ${op}avoided${cl} the giant bird statue`, `I ${op}avoid${cl} swooping magpies`
            ],
        },
        {
            term: "Blacken",
            class: "Verb",
            sentences: [
                `She will ${op}blacken${cl} the wall with paint`, `They ${op}blacken${cl} her reputation`, `It will ${op}blacken${cl} during nightfall`
            ],
        }, 
        {
            term: "Eat",
            class: "Verb",
            sentences: [
                `She will ${op}eat${cl} the whole pizza if you're not careful`, `They ${op}eat${cl} whatever I cook them`, `I ${op}eat${cl} when I'm sad`
            ],
        },
        {
            term: "Cook (verb)",
            class: "Verb",
            sentences: [
                `I will ${op}cook${cl} you a Zucchini fritter`, `I promise I won't ${op}cook${cl} your pet fish`
            ],
        },
        {
            term: "Make (verb)",
            class: "Verb",
            sentences: [
                `I ${op}made${cl} a game on word classes`, `I ${op}made${cl} pumpkin fritters on sunday afternoon`, `${op}Make${cl} sure the prisoners do not escape`
            ],
        },
        {
            term: "Win (verb)",
            class: "Verb",
            sentences: [
                `You could ${op}win${cl} this game if you play enough`, `He ${op}won${cl} the tiramisu after a year of hardwork`, `You ${op}won${cl}`
            ],
        },
        {
            term: "Follow (verb)",
            class: "Verb",
            sentences: [
                `The cat ${op}follows${cl} the bird`, `I will ${op}follow${cl} you home in the dark when you aren't looking`, `After sunlight, darkness ${op}followed${cl}`, `He will ${op}follow${cl} her to the tasmanian frangipani conference`
            ],
        },
        {
            term: "Stop (verb)",
            class: "Verb",
            sentences: [
                `Please ${op}stop${cl} puring cranberry juice on the baby`, `Put a ${op}stop${cl} to Climate Change`
            ],
        },
        {
            term: "Act (verb)",
            class: "Verb",
            sentences: [
                `He ${op}acted${cl} really strange`, `She will ${op}act${cl} out any script you have`
            ],
        },
        {
            term: "Bleed (verb)",
            class: "Verb",
            sentences: [
                `Please stop ${op}bleeding${cl} sir`, `He will ${op}bleed${cl} if stabbed with a pinapple`
            ],
        },
        {
            term: "Chase (verb)",
            class: "Verb",
            sentences: [
                `Stop ${op}chasing${cl} the toddler`, `Never ${op}chase${cl} a chicken`
            ],
        }
    ],
    adjective: [
        {
            term: "Old (Adjective)",
            class: "Adjective",
            sentences: [
                `The ${op}old${cl} ship was falling apart`, `My turtle is an ${op}old${cl} sulcata`
            ],
        },
        {
            term: "Most (Adjective)",
            class: "Adjective",
            sentences: [
                `Person with the ${op}most${cl} snails`, `${op}Most${cl} businesses focus on making a profit.`
            ],
        },
        {
            term: "Beautiful (Adjective)",
            class: "Adjective",
            sentences: [
                `They live in a ${op}beautiful${cl} house`, `This is a ${op}beautiful${cl} view.`
            ],
        },
        {
            term: "Meaningless (Adjective)",
            class: "Adjective",
            sentences: [
                `This person writes ${op}meaningless${cl} letters`, `Most meetings are ${op}meaningless${cl}.`
            ],
        },
        {
            term: "Nicer (Adjective)",
            class: "Adjective",
            sentences: [
                `She is ${op}nicer${cl} to all the monkeys`, `${op}Nicer${cl} people make the world better.`
            ],
        },
        {
            term: "Gorgeous (Adjective)",
            class: "Adjective",
            sentences: [
                `Their cat is ${op}gorgeous${cl}`, `${op}Gorgeous${cl} hair on them.`
            ],
        },
    ],
    adverb: [
        {
            term: "Most (Adverb)",
            class: "Adverb",
            sentences: [
                `This is the ${op}most${cl} ridiculous looking design`, `This is the ${op}most${cl} lovable cat`, `This is the ${op}most${cl} rapid river`
            ],
        },
    ],
    pronoun: [
        {
            term: "I",
            class: "Pronoun",
            sentences: [
                `${op}I${cl} just love how she balances those fruit`, `${op}I${cl} am fascinated by bullet trains`, `You and ${op}I${cl} will get along just fine`
            ],
        },
        {
            term: "We",
            class: "Pronoun",
            sentences: [
                `${op}We${cl} love the Shawshank Redemption`, `${op}We${cl} have decided on this`, `You did say ${op}we${cl} could`
            ],
        },
        {
            term: "You",
            class: "Pronoun",
            sentences: [
                `${op}You${cl} dislike zucchini don't you`, `${op}You${cl} should try this new restaurant`, `I realise now that ${op}you${cl} like strawberries`
            ],
        },
        {
            term: "He",
            class: "Pronoun",
            sentences: [
                `${op}He${cl} loves fruit`, `${op}He${cl} is fascinated by trains`, `You and ${op}Him${cl} will get along just fine`
            ],
        },
        {
            term: "She",
            class: "Pronoun",
            sentences: [
                `${op}She${cl} dislikes prawns`, `${op}She${cl} looked really good in those`, `I think that ${op}she${cl} just hates seafood`
            ],
        },
        {
            term: "They",
            class: "Pronoun",
            sentences: [
                `${op}They${cl} started firing everyone`, `${op}They${cl} would often fight`, `You and ${op}them${cl} over there`
            ],
        },
    ],
    preposition: [
        {
            term: "Into",
            class: "Preposition",
            sentences: [
                `The turkey went ${op}into${cl} the room`, `Richard Browning is ${op}into${cl} personal jet suits`, `You could be ${op}into${cl} trouble if you stop playing`
            ],
        },
    ]
    ,
    conjunction: [
        {
            term: "Or",
            class: "Conjunction",
            sentences: [
                `I will have orange ${op}or${cl} lemon`, `You can have a bike ${op}or${cl} an Xbox`, `It is either one ${op}or${cl} the other`
            ],
        },
    ]
    ,
    determiner: [
        {
            term: "The",
            class: "Determiner",
            sentences: [
                `${op}The${cl} pineapple is spiky`, `I want ${op}the${cl} red one`, `You are ${op}the${cl} best for playing this game`
            ],
        },
        {
            term: "A",
            class: "Determiner",
            sentences: [
                `${op}A${cl} pineapple can be really spiky`, `${op}A${cl} red one is what I want`, `You are ${op}a${cl} legend for playing`
            ],
        },
    ]
    ,
    interjection: [
        {
            term: "Wow",
            class: "Interjection",
            sentences: [
                `${op}Wow${cl}! you're good at this`, `${op}Wow${cl}! up to Interjections already`, `Just, ${op}wow${cl}! Thanks for playing this far `
            ],
        },
        {
            term: "Oh my god",
            class: "Interjection",
            sentences: [
                `${op}Oh my god${cl}! The fire extinguisher is on fire`, `${op}Oh my god${cl}! There's a unicorn over there`, `He said it to me last ni... ${op}Oh my god${cl}`
            ],
        },
        {
            term: "Look",
            class: "Interjection",
            sentences: [
                `${op}Look${cl}, an intoxicated sperm whale`, `${op}Look${cl} - over there`, `Just a moment ago, it wa.. ${op}look${cl}!`
            ],
        },
    ]
}
const levelBracketSize = 10;

// Retrieve Elements
const gameArea = document.querySelector('.gamearea');
const term = gameArea.querySelector('.gamearea__term');
const answer = gameArea.querySelector('.gamearea__answer');
const options = gameArea.querySelectorAll('.option');
const submitBtn = gameArea.querySelector('.gamearea__submit');
const levelDisplay = gameArea.querySelector('.gamearea__levelDisplay');

// Initialise variables
var blacklist = [];
var level = 1;

// Option Selection Setup
for(let option = 0; option < options.length; option++) {
    options[option].addEventListener('click', (e) => {
        options[option].classList.toggle('option--selected');
        if (submitBtn.style.display === "none") { // Not answered yet
            checkAnswer();
        }
    });
}

// Submit Button Setup
submitBtn.addEventListener('click', submit);

// Submit
function submit() {
    if (submitBtn.innerText === "Start Game") {
        startGame();
    } else if (submitBtn.innerText === "Next Round") { // Next Round
        loadRound();
    }
}

// Start Game
function startGame() {
    loadRound();
}

// Load Round
function loadRound() {
    // Reset background fade
    gameArea.style.background = 'var(--white)';
    gameArea.style.transition = 'background-color 0.5s ease-out';
    // Remove correcticons (ticks and crosses)
    let correcticons = gameArea.querySelectorAll('.correcticon')
    for(i=0; i < correcticons.length; i++) {
        correcticons[i].remove();
    }
    // Deselect all options
    for(let option = 0; option < options.length; option++) {
        options[option].classList.remove("option--selected");
    }
    
    // Generate new question
    let currentQuestion = generateQuestion();
    // Update document
    document.querySelector('.gamearea__correctClass').innerText = currentQuestion.class;
    let sentenceNo = Math.floor(Math.random() * currentQuestion.sentences.length)
    term.innerHTML = currentQuestion.sentences[sentenceNo];
    submitBtn.style.display = "none";
    // Blacklist question temporarily
    blacklist.push(currentQuestion.term)
}

// Check Answer
function checkAnswer() {
    // Get Correct Classes
    let correctClass = document.querySelector('.gamearea__correctClass').innerText.toLowerCase();
    
    // Loop through options
    for(let option = 0; option < options.length; option++) {
        // Check if I am needed
        let needed = false;
        if (options[option].id === correctClass) {
            // I am a correct class
            needed = true;
        }
        // Am I selected or not
        let selected = options[option].classList.contains('option--selected');
        // Evaluate correctness and append appropriate image
        if (selected) {
            if (needed) {
                // Correctly answered
                level += 1;
                levelDisplay.innerText = Math.ceil(level);
                gameArea.style.background = 'var(--greenFlash)';
                gameArea.style.transition = 'background-color 0.5s ease-in';
                let correct = document.createElement("img");
                correct.classList.add('correcticon')
                correct.src = "./images/correct.svg";
                correct.alt = "green tick";
                options[option].appendChild(correct);
            } else {
                // Incorrectly answered
                gameArea.style.background = 'var(--redFlash)';
                gameArea.style.transition = 'background-color 0.5s ease-in';
                let incorrect = document.createElement("img");
                incorrect.classList.add('correcticon')
                incorrect.src = "./images/incorrect.svg";
                incorrect.alt = "red cross";
                options[option].appendChild(incorrect);
            }
        } else {
            if (needed) {
                // Incorrectly ignored
                gameArea.style.background = 'var(--redFlash)';
                gameArea.style.transition = 'background-color 0.5s ease-in';
                let incorrect = document.createElement("img");
                incorrect.classList.add('correcticon')
                incorrect.src = "./images/incorrect.svg";
                incorrect.alt = "red cross";
                options[option].appendChild(incorrect);
            }
        }
    }
    // Finalise
    submitBtn.style.display = "block";
    submitBtn.innerText = "Next Round";
}

// Class Number To Class
function classnumberToClass(number) {
    switch (number) {
        case 0: return("noun");
        case 1: return("verb");
        case 2: return("adjective");
        case 3: return("adverb");
        case 4: return("pronoun");
        case 5: return("preposition");
        case 6: return("conjunction");
        case 7: return("determiner");
        case 8: return("interjection");
        default: return("interjection")
    }
}

// Update Options
function updateOptions() {
    let bracket = Math.ceil(level/levelBracketSize)
    for(i=0;i<=bracket;i++) {
        gameArea.querySelector("#" + classnumberToClass(i)).classList.remove("option--hidden");
    }
}

// Generate Question
function generateQuestion() {
    // Update Options to current class bracket
    updateOptions()
    // Establish bracket
    let currentClass = "interjection";
    let levelBracket = Math.ceil(level/levelBracketSize);
    // Choose random class within bracket
    let classNumber = Math.round(Math.random()*levelBracket);
    // Return class
    currentClass = classnumberToClass(classNumber);

    // Clear end of blacklist
    let blacklistResetPoint = currentClass.length-Math.floor(currentClass.length/3)
    if (blacklist.length > blacklistResetPoint) blacklist.shift();
    // Random question number in array of current class
    let currentQuestion = Math.floor(Math.random() * content[String(currentClass)].length);
    
    // Repeat this function inside itself until we have a question that is not in the blacklist
    for (i=0; i<blacklist.length; i++) {
        if (blacklist[i] === content[String(currentClass)][currentQuestion]["term"]) {
            return generateQuestion();
        }
    }
    return content[String(currentClass)][currentQuestion];
}
