var computerPattern = [];

var userPattern = [];

var gameStarted = false;

var level = 0;


$(document).keypress(function() {

  if (!gameStarted) {


    computer();

    gameStarted = true;
  }



});




function checkAnswer(currentLevel) {

  if (computerPattern[currentLevel] === userPattern[currentLevel]) {

    console.log("success");

    if (userPattern.length === computerPattern.length) {

      setTimeout(function() {
        computer();
      }, 1000);

    }

  }

else{
    $("body").addClass("game-over");
    soundEffect("wrong");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    startOver();

}

}


//computer Chooses a button

function computer() {

   userPattern = [];
  level++;
  $("#level-title").text("level  " + level);


  var colourButtons = ["green", "blue", "red", "yellow"];
  var randomNumber = Math.floor(Math.random() * 4);
  var colourSelected = colourButtons[randomNumber];

  computerPattern.push(colourSelected);

  $("#" + colourSelected).fadeIn(100).fadeOut(100).fadeIn(100);

  soundEffect(colourSelected);
console.log(computerPattern);


}



$(".btn").click(function() {


  var colourClicked = ($(this).attr("id"));

  userPattern.push(colourClicked);
  soundEffect(colourClicked);

  $("#" + colourClicked).addClass("pressed");

  setTimeout(function() {
    $("#" + colourClicked).removeClass("pressed");
  }, 100);

checkAnswer(userPattern.length - 1);


});

//restart game

function startOver(){

gameStarted = false;
level= 0;
computerPattern = [];
$("#level-title").text("Press Any Key to Start");


}


//sound effects

function soundEffect(colour) {

  var audio = new Audio("sounds/" + colour + ".mp3");
  audio.play();

}
