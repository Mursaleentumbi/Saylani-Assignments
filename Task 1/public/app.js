var userInput = prompt("Head or Tail?");

var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

if (randomNumber2 < randomNumber1) {
    alert("You won the Toss.");
}

if (randomNumber2 > randomNumber1) {
    alert("You lost the Toss.");
}