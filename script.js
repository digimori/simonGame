
let buttonColours = ["red", "blue", "yellow", "green"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text(`Level: ${level}`);
    nextSequence();
    started = true;
  }
});

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
  // Getting the value of the button clicked
    let userChosenColour = $(this).attr("id");
    // Pushing it onto the userClickedPattern array.
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length -1); 
  });

  function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if(userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
          nextSequence();
        }, 1000)
      }
    }else {
      playSound("wrong");
      $("body").addClass("game-over");
      $('#level-title').text("Game Over, Press any key to restart.");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
  }

function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text(`Level: ${level}`);
  let randomNum = Math.trunc(Math.random() * 4); // Between 0 and 3
  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);
// Selecting the button with the same ID as chosen colour, we don't need to select the element here, just append the result of the function call to the ID selector.
// Animating the button
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

function animatePress(currentColour) {
  // Get the element with the id matching the colour, add the class
  $("#" + currentColour).addClass("pressed");
  // timeout to remove the class so that the pressed class doesn't stay.
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }