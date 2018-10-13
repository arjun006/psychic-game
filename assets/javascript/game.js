window.onload = function(){ 

//Psychic Game
var wins=0;
var losses=0;
var numberOfGuesses=9;
var lettersGuessed=[];
var computerGuess;
var playerGuess;



//Game Reset Function
function resetGame(){
    numberOfGuesses=9;
    document.getElementById("guessesLeft").innerHTML=numberOfGuesses;
    lettersGuessed=[];
    document.getElementById("lettersGuessed").innerHTML=lettersGuessed;
    game();
};


//When player runs out of guesses
function noGuesses(){
    if(numberOfGuesses==0){
        alert("You Lost!");
        losses++;
        document.getElementById("losses").innerHTML=losses;
        resetGame()
    }
};


//Psychic Game Function
game();

function game(){

//List of letters for computer to randomly pick
     var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    var computerGuess=randomLetter;

//Checks to see if players guess is right or not
    checkPlayerGuess();
    function checkPlayerGuess(){
        document.onkeyup=function(event){

//Change key event to string
            playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Sets conditions, so only letters can be typed
            if (event.keyCode<65 || event.keyCode>90){
                alert("Type a Letter from A - Z")
            }

//If player guesses correctly
            else if (lettersGuessed.indexOf(playerGuess)>=0){
                alert("You Aready Guessed That!");
            } else if(playerGuess==computerGuess)
            {
                alert("You Guessed "+"(" + computerGuess +")"+ " ...You Won!");
                wins++;
                document.getElementById("wins").innerHTML=wins;
                resetGame();

//If player guesses incorrectly
            } else 
            {
                numberOfGuesses--;
                lettersGuessed.push(playerGuess);
                document.getElementById("lettersGuessed").innerHTML=lettersGuessed;
                document.getElementById("guessesLeft").innerHTML=numberOfGuesses;
                
                noGuesses();
               
                };
                
            };
            
            
        };
    };
};

