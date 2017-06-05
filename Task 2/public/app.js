var userInput = +prompt("Enter your lucky Number from 1-9");

var randomNumber1 = Math.random()  * 10;
var randomNumber2 = Math.random()  * 10;
var randomNumber3 = Math.random()  * 10;
var randomNumber4 = Math.random()  * 10;
var randomNumber5 = Math.random()  * 10;
var randomNumber6 = Math.random()  * 10;

randomNumber1 =  Math.round(randomNumber1);
randomNumber2 =  Math.round(randomNumber2);
randomNumber3 =  Math.round(randomNumber3);
randomNumber4 =  Math.round(randomNumber4);
randomNumber5 =  Math.round(randomNumber5);
randomNumber6 =  Math.round(randomNumber6);


if (userInput === randomNumber1){
    alert(userInput + " is your Lucky Number");
}

else if (userInput === randomNumber2){
    alert(userInput + " is your Lucky Number");
}

else if (userInput === randomNumber3){
    alert(userInput + " is your Lucky Number");
}

else if (userInput === randomNumber4){
    alert(userInput + " is your Lucky Number");
}

else if (userInput === randomNumber5){
    alert(userInput + " is your Lucky Number");
}

else if (userInput === randomNumber6){
    alert(userInput + " is your Lucky Number");
}

else {
    alert("Try another number");
}