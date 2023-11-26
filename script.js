
let gamePattern = [];
let buttonColours = ["red", "blue", "yellow", "green"];
let userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
  // Getting the value of the button clicked
    let userChosenColour = $(this).attr("id");
    // Pushing it onto the userClickedPattern array.
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
  });
   


function nextSequence() {
  let randomNum = Math.trunc(Math.random() * 4); // Between 0 and 3
  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);
// Selecting the button with the same ID as chosen colour, we don't need to select the element here, just append the result of the function call to the ID selector.
// Animating the button
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}
nextSequence();

function playSound(name) {
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
 
  }

function animatePress(currentColour) {
  // Get the element with the id matching the colour, add the class
  $("#" + currentColour).addClass("pressed");
  // timeout to remove the class so that the pressed class doesn't stay.
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
