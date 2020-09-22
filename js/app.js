


// Tomagatchi class
class Tomagatchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
    }
}

const createToma = function (name) {
    const toma = new Tomagatchi(name);
    console.log(toma);
}

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

