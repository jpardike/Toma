
let toma = null;
const $nameInput = $('.name-input');
const $nameButton = $('.name-button');

// Tomagatchi class
class Tomagatchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
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
    const $toma = $('<img />');
    $toma.addClass('toma');
    $toma.attr('src', 'https://picsum.photos/id/1025/50');
    $('.gameplay-section').append($toma);
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
        toma.hunger = 1;
        updateMetrics();
    });

    $sleepButton.on('click', function () {
        console.log('sleep button clicked');
        toma.sleepiness = 1;
        updateMetrics();
    });

    $exerciseButton.on('click', function () {
        console.log('exercise button clicked');
        toma.boredom = 1;
        updateMetrics();
    });
};

$('.start-button').on('click', function (e) {
    e.preventDefault();

    const inputVal =  $nameInput.val();

    console.log(inputVal);

    if (inputVal === '') {
        toma = new Tomagatchi('Toma');
        updateMetrics();
        console.log(toma.name);
    } else {
        toma = new Tomagatchi(inputVal);
        updateMetrics();
        console.log(toma.name);
    }
    $('section').removeClass('hidden');
    generateToma();
    rightButtonsController();
});

