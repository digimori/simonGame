
let gamePattern = [];
let buttonColours = ["red", "blue", "yellow", "green"];
let userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)});

    console.log(userClickedPattern);

function nextSequence() {
  let randomNum = Math.trunc(Math.random() * 4); // Between 0 and 3
  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);
// Selecting the button with the same ID as chosen colour, we don't need to select the element here, just append the result of the function call to the ID selector.
// Animating the button
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
audio.play();

}
nextSequence();




