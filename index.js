
var randomNumber1 = Math.floor(Math.random()*6) +1;//to generate randome no.

var randomDiceImage = "dice" + randomNumber1 + ".png";//to change the image address.

var randomeImageSource = "images/" + randomDiceImage;//to change the image source.

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomeImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomeImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomeImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 Wins!";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}


