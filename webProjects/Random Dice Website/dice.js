//Player 1


var randomNumber = Math.floor(Math.random() * 6) + 1 ;  // random number from 1 to 6

var randomDice = "dice" + randomNumber + ".png"; //dice1.png : ect...

var fullLocationOfImages = "images/" + randomDice; //images/dice1.png;

document.querySelector(".img1").setAttribute("src" , fullLocationOfImages); //change image on refresh;




//player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDice2 = "dice" + randomNumber2 + ".png"; //dice1.png : ect...

var fullLocationOfImages2 = "images/" + randomDice2; //images/dice1.png;


document.querySelector(".img2").setAttribute("src" , fullLocationOfImages2); //change image on refresh;



//When Refreshed the Heading one Changes to The result (Winner , Loser , Tie)

if(randomNumber < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Wow Its a Draw";
}
