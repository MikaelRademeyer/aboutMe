var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//loop to get all the buttons

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // refers to the button that just got pressed

    var buttoninnerHTML = this.innerHTML;

    // makeSound function called when the button got pressed
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);


    document.addEventListener("keydown", function(event) {

      //calling makeSound function , event is there to see which key got pressed on the keyboard. document includes everywhere.

      makeSound(event.key);
      buttonAnimation(event.key);

    })


  })

}





//switch statement to see which key was pressed

function makeSound(key) {

  switch (key) {

    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;


    case "a":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;


    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;


    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;


    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom3 = new Audio('sounds/tom-4.mp3');
      tom3.play();
      break;


    default:
      console.log("pressed the wrong key");



  }

}

//function to change the opacity

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  //back to normal in 100 seconds

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
