$(document).ready(function (){

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
function updateWinOrLose(){
    $("#win-or-lose").text("");
}

function startNewGame() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120-19) + 19);
    $("#number-to-guess").text(targetNumber);
    setTimeout(updateScore, 3000);
    setTimeout(updateWinOrLose, 3000);
}


// function getRandomNumber(min, max){
    // console.log( Math.floor(Math.random() * (max - min)) + min);
// }
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
$("#number-to-guess").text(targetNumber);
var numberOptions = [];
var imgSrc = ["assets/images/crystal1.jpg", "assets/images/crystal2.png", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

// this creates a new div for the crystals


for (var i = 0, k = 0; i < imgSrc.length, k < 4; i++, k++) {
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", imgSrc[i]);
numberOptions[k] = (Math.floor(Math.random() * 12) + 1);
imageCrystal.attr("data-crystalvalue", numberOptions[k]);
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
startNewGame();
updateWins();
updateLosses();
$("#score").text(counter);



});