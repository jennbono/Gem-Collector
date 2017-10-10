var wins = 0;
var losses = 0;
var totalScore = 0;

// assign a random number between 19-120 for the number-to-guess span
var targetNumber =  0;

// assign a random number between 1-12 to each crystal
var blueCrystal = 0;

var clearCrystal = 0;

var greenCrystal = 0;

var redCrystal = 0;

resetGame();
// check to see if total-score span is equal to random numberToGuess span
function checkWin() {
    // if it is === add a win to the wins span
    if (totalScore === targetNumber) {
      wins++;
      $("#wins").html(wins);
      resetGame();
    }
    // if it is > add a loss to the losses span
    else if (totalScore > targetNumber) {
      losses++;
      $("#losses").html(losses);
      resetGame();
    }
}

function resetGame() {
  totalScore = 0;
  $("#totalScore").html(totalScore);

  // assign a random number between 19-120 for the number-to-guess span
  targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#numberToGuess").html(targetNumber);

  // assign a random number between 1-12 to each crystal
  blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalBlue").html(blueCrystal);

  clearCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalClear").html(clearCrystal);

  greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalGreen").html(greenCrystal);

  redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
  $("#crystalRed").html(redCrystal);
}


// add up total of clicked crystals to totalScore span
// set up on click event to each crystal
$("#crystalBlue").click(function() {
  totalScore = totalScore + blueCrystal;
  $("#totalScore").html(totalScore);
  checkWin(); 
});

$("#crystalClear").click(function() {
  totalScore = totalScore + clearCrystal;
  $("#totalScore").html(totalScore);
  checkWin();
});

$("#crystalGreen").click(function() {
  totalScore = totalScore + greenCrystal;
  $("#totalScore").html(totalScore);
  checkWin();
});

$("#crystalRed").click(function() {
  totalScore = totalScore + redCrystal;
  $("#totalScore").html(totalScore);
  checkWin();
});
