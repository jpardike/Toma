
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
    $feedButton.addClass('button-feed action-buttons');

    const $sleepButton = $('<button>SLEEP</button>');
    $sleepButton.addClass('button-sleep action-buttons');

    const $exerciseButton = $('<button>EXERCISE</button>');
    $exerciseButton.addClass('button-exercise action-buttons');

    $newDiv.append($feedButton);
    $newDiv.append($sleepButton);
    $newDiv.append($exerciseButton);

    // button events to interact with tomagatchi
    $feedButton.on('click', function () {
        // console.log('feed button clicked');
        toma.hunger = 0;
        $feedButton.css('background-color', 'darkcyan');
        $toma.css({'animation': 'shake 2s', 'animation-iteration-count': '1'});
        animationReset();
        updateMetrics();
    });

    $feedButton.hover(
        function () {
        $feedButton.css('background-color', '#68D6C3');
        },
        function () {
            $feedButton.css('background-color', 'darkcyan');
        }
    );

    $sleepButton.on('click', function () {
        // console.log('sleep button clicked');
        toma.sleepiness = 0;
        $sleepButton.css('background-color', 'darkcyan');
        $('.gameplay-section').addClass('dark');
        $toma.css({'animation': 'sleep 5s', 'animation-iteration-count': '1'});
        darkTimer();
        animationReset();
        updateMetrics();
    });
        
    $sleepButton.hover(
        function () {
        $sleepButton.css('background-color', '#68D6C3');
        },
        function () {
            $sleepButton.css('background-color', 'darkcyan');
        }
    );

    $exerciseButton.on('click', function () {
        // console.log('exercise button clicked');
        toma.boredom = 0;
        $exerciseButton.css('background-color', 'darkcyan');
        $toma.css({'animation': 'move 2s ease-in-out alternate', 'animation-iteration-count': '3'});
        animationReset();
        updateMetrics();
    });

    $exerciseButton.hover(
        function () {
            $exerciseButton.css('background-color', '#68D6C3');
        },
        function () {
            $exerciseButton.css('background-color', 'darkcyan');
        }
    );
};

// Dark timer function 
const darkTimer = function () {
    const timer = setInterval(function () {
        $('.gameplay-section').removeClass('dark');
    }, 3000);
}

// Egg Timer Function
const eggTimer = function () {
    const timer = setInterval(function () {
        $toma.css({'animation': 'move 30s ease-in-out alternate', 'animation-iteration-count': 'infinite'});
        $toma.attr('src', './images/free-pixel-art-tiny-hero-sprites/3 Dude_Monster/Dude_Monster.png');
        clearInterval(timer);
    }, 3000);
}

// animation reset timer
const animationReset = function () {
    const timer = setInterval(function () {
        $toma.css({'animation': 'move 30s ease-in-out alternate', 'animation-iteration-count': 'infinite'});
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

        if (toma.hunger >= 8) {
            $('.message-text').text('I\'m so hungry...');
            $('.button-feed').css('background-color', 'red');
        }
        if (toma.sleepiness >= 8) {
            $('.message-text').text('I\'m so sleepy...');
            $('.button-sleep').css('background-color', 'red');
        }
        if (toma.boredom >= 8) {
            $('.message-text').text('This is boring...');
            $('.button-exercise').css('background-color', 'red');
        }

        if (toma.hunger <= 7 && toma.sleepiness <= 7 && toma.boredom <= 7) {
            $('.message-text').text('HI FRIEND!');
        }

        if (toma.hunger >= 10 || toma.sleepiness >= 10 || toma.boredom >= 10 || toma.age === 5) {
            $toma.attr('src', './images/free-pixel-art-tiny-hero-sprites/3 Dude_Monster/Rock2.png')
            $('.message-text').text(`GAME OVER`);
            $toma.css({'animation': 'none'});
            $('.button-feed').remove();
            $('.button-sleep').remove();
            $('.button-exercise').remove();
            
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

    }, 2000);
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
