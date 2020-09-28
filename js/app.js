
let $toma;
let toma = null;
const $nameInput = $('.name-input');
const $nameButton = $('.name-button');
let ageCounter = 0;

// Tomagatchi class
class Tomagatchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
    }
};

// function to create tomagatchi and display metrics

    


const updateMetrics = function () {
    $('.toma-name').text(toma.name);
    $('.age-text').text(`AGE: ${toma.age}`);
    $('.hunger-text').text(`HUNGER: ${toma.hunger}`);
    $('.sleepiness-text').text(`SLEEPY: ${toma.sleepiness}`);
    $('.boredom-text').text(`BORED: ${toma.boredom}`);
}

// function that generates an image that represents the Tomagatchi
const generateToma = function () {
    $toma = $('<img />');
    $toma.addClass('toma');
    $toma.css({'animation': 'shake 0.5s', 'animation-iteration-count': 'infinite'});
    $toma.attr('src', './images/PixelArt.png');
    $toma.css({'width': '40px', 'height': 'auto', 'position': 'absolute', 'bottom': '22%'});
    $('.gameplay-section').append($toma);
    eggTimer();
};

// create right buttons function
const rightButtonsController = function () {
    const $newDiv = $('<div />');
    $newDiv.addClass('right-buttons');
    $('.gameplay-section').append($newDiv);

    const $feedButton = $('<button>FEED</button>');
    $feedButton.addClass('button-feed');

    const $sleepButton = $('<button>SLEEP</button>');
    $sleepButton.addClass('button-sleep');

    const $exerciseButton = $('<button>EXERCISE</button>');
    $exerciseButton.addClass('button-exercise');

    $newDiv.append($feedButton);
    $newDiv.append($sleepButton);
    $newDiv.append($exerciseButton);

    // button events to interact with tomagatchi
    $feedButton.on('click', function () {
        console.log('feed button clicked');
        toma.hunger = 0;
        updateMetrics();
    });

    $sleepButton.on('click', function () {
        console.log('sleep button clicked');
        toma.sleepiness = 0;
        updateMetrics();
    });

    $exerciseButton.on('click', function () {
        console.log('exercise button clicked');
        toma.boredom = 0;
        updateMetrics();
    });
};

// Egg Timer Function
const eggTimer = function () {
    const timer = setInterval(function () {
        $toma.css({'animation': 'move 30s ease-in-out alternate', 'animation-iteration-count': 'infinite'});
        $toma.attr('src', './images/free-pixel-art-tiny-hero-sprites/3 Dude_Monster/Dude_Monster.png');
        clearInterval(timer);
    }, 3000);
}

// Age Timer Function

const ageTimer = function () {
    const timer = setInterval(function () {
        toma.hunger += 1;
        toma.sleepiness += 1;
        toma.boredom += 1;
        ageCounter += 1;
        updateMetrics();

        if (toma.hunger === 8) {
            $('.message-text').text('I\'m so hungry...');
        }
        if (toma.sleepiness === 8) {
            $('.message-text').text('I don\'t feel so well...');
        }
        if (toma.sleepiness === 8) {
            $('.message-text').text('This is boring...');
        }

        if (toma.hunger <= 7 && toma.sleepiness <= 7 && toma.boredom <= 7) {
            $('.message-text').text('HI FRIEND!');
        }

        if (toma.hunger >= 10 || toma.sleepiness >= 10 || toma.boredom >= 10) {
            $toma.attr('src', './images/free-pixel-art-tiny-hero-sprites/3 Dude_Monster/Rock2.png')
            $('.message-text').text(`GAME OVER`);
            $toma.css({'animation': 'none'});
            clearInterval(timer);
        }

        if (ageCounter === 10) {
            toma.age++;
            ageCounter = 0;
        }

        if (toma.age === 2) {
            $toma.attr('src', './images/free-pixel-art-tiny-hero-sprites/2 Owlet_Monster/Owlet_Monster.png');
            $toma.css({'width': '60px'});
        }

    }, 5000);
}

$('.start-button').on('click', function (e) {
    e.preventDefault();

    const inputVal =  $nameInput.val();

    console.log(inputVal);

    if (inputVal === '') {
        toma = new Tomagatchi('Toma');
        updateMetrics();
        console.log(toma.name);
        ageTimer();
    } else {
        toma = new Tomagatchi(inputVal);
        updateMetrics();
        console.log(toma.name);
        ageTimer();
    }
    $('h1').css({'padding-top': '1%', 'font-size': '4em'});

    $('section').removeClass('hidden');
    generateToma();
    rightButtonsController();
    $('form').css('display', 'none');
    
});
