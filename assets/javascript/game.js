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
    


}


var targetNumber = Math.floor(Math.random() * 120) +19;
$("#number-to-guess").text(targetNumber);

var numberOptions = Math.floor(Math.random() * 12) + 1;

var imgSrc = ["assets/images/crystal1.jpg", "assets/images/crystal2.png", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]

// this creates a new div for crystal1
for (var i=0; i < imgSrc.length; i++) {
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", imgSrc[i]);
imageCrystal.attr("data-crystalvalue", numberOptions);
$("#crystals").append(imageCrystal);
}

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