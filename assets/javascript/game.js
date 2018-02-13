var wins = 0;
var losses = 0;
var counter = 0;

function updateWins() {
    $("#wins").text(wins);
}
function updateLosses() {
    $("#losses").text(losses);
}
function updateScore() {
    $("#score").text(counter);
}
function startNewGame() {
    counter = 0;
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").text(targetNumber);
    numberOptions1 = Math.floor(Math.random() * 12) + 1;
    numberOptions2 = Math.floor(Math.random() * 12) + 1;
    numberOptions3 = Math.floor(Math.random() * 12) + 1;
    numberOptions4 = Math.floor(Math.random() * 12) + 1;


}


var targetNumber = Math.floor(Math.random() * 120) +19;
$("#number-to-guess").text(targetNumber);


// can I create these divs with a for loop??
// this creates a new div for crystal1
var numberOptions1 = Math.floor(Math.random() * 12) +1;
var imageCrystal1 = $("<img>");
imageCrystal1.addClass("crystal-image");
imageCrystal1.attr("src", "assets/images/crystal1.jpg");
imageCrystal1.attr("data-crystalvalue", numberOptions1);
$("#crystals1").append(imageCrystal1);

// this creates a new div for crystal2
var numberOptions2 = Math.floor(Math.random() * 12) + 1;    
var imageCrystal2 = $("<img>");
imageCrystal2.addClass("crystal-image");
imageCrystal2.attr("src", "assets/images/crystal2.png");
imageCrystal2.attr("data-crystalvalue", numberOptions2);
$("#crystals2").append(imageCrystal2);

// this creates a new div for crystal3
var numberOptions3 = Math.floor(Math.random() * 12) + 1;
var imageCrystal3 = $("<img>");
imageCrystal3.addClass("crystal-image");
imageCrystal3.attr("src", "assets/images/crystal3.jpg");
imageCrystal3.attr("data-crystalvalue", numberOptions3);
$("#crystals3").append(imageCrystal3);

// this creates a new div for crystal4
var numberOptions4 = Math.floor(Math.random() * 12) + 1;
var imageCrystal4 = $("<img>");
imageCrystal4.addClass("crystal-image");
imageCrystal4.attr("src", "assets/images/crystal4.jpg");
imageCrystal4.attr("data-crystalvalue", numberOptions4);
$("#crystals4").append(imageCrystal4);


// this onclick event adds up the score
$(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#score").text(counter);
        if (counter === targetNumber) {
        $("#win-or-lose").text("You Win!")
        wins++;
        startNewGame();
    }
    else if (counter >= targetNumber) {
        $("#win-or-lose").text("You Lose!")
        losses++;
        startNewGame();
    }
    updateWins();
    updateLosses();
});
updateWins();
updateLosses();
$("#score").text(counter);