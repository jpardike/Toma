


// Tomagatchi class
class Tomagatchi {
    constructor(name) {
        this.name = name;
        this.age = 2;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
    }
}

// function to create tomagatchi and display metrics
const createToma = function (name) {
    const toma = new Tomagatchi(name);
    // console.log();
    $('.age-text').text(`AGE: ${toma.age}`);
    $('.hunger-text').text(`HUNGER: ${toma.hunger}`);
    $('.sleepiness-text').text(`SLEEPY: ${toma.sleepiness}`);
    $('.boredom-text').text(`BORED: ${toma.boredom}`);
    return toma;
}

// function that generates an image that represents the Tomagatchi
const generateToma = function () {
    const $toma = $('<img />');
    $toma.addClass('toma');
    $toma.attr('src', 'https://picsum.photos/id/1025/50');
    $('.gameplay-section').append($toma);
}


// button that starts game
$('.play-button').on('click', function() {
    // console.log('button clicked');
    createToma('Toma');
    generateToma();
});

