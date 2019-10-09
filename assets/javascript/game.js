var animals = ["giraffe", "rhino", "zebra", "hyena", "buffalo"];
//chosenAnimal and splitChosenAnimal should be the same length
var chosenAnimal
var splitChosenAnimal

var wordToBeGuessed
var guessesLeft
var guessedLetters
var wrongGuesses

win = 0;
loss = 0;

ready = false;

function reset (){
    chosenAnimal = animals[Math.floor(Math.random() * animals.length)];
    splitChosenAnimal = chosenAnimal.split("");
    wordToBeGuessed = [];
    guessesLeft = 12;
    guessedLetters = [];
    wrongGuesses = [];
    for(i=0; i<splitChosenAnimal.length; i++){
        wordToBeGuessed[i] = "_";
    }
    emptyWord.textContent = wordToBeGuessed.join(" ");
    guesses.textContent = guessesLeft;
    finalMessage.textContent = "";
    $("#message-container").attr("hidden", true);
    usedLetters.textContent = "";
}

document.addEventListener("DOMContentLoaded", function(event) {

    document.onkeydown = function(event) {
        if(ready === false){
            title.textContent = "Can you figure out the word?";   
            ready = true;
            reset();
        }else{
            userGuess = event.key;

            if(guessedLetters.indexOf(userGuess) === -1){
                finalMessage.textContent = "";
                $("#message-container").attr("hidden", true);
                guessedLetters.push(userGuess);
                if(chosenAnimal.indexOf(userGuess) === -1){
                    wrongGuesses.push(userGuess);
                }
                
                usedLetters.textContent = wrongGuesses.join(" ");

                if(chosenAnimal.indexOf(userGuess) === -1){
                
                    guessesLeft--;
                    if(guessesLeft === 0){
                        finalMessage.textContent = "Press any key to try again";
                        $("#message-container").attr("hidden", false);
                        title.textContent = "You Lost!";
                        loss++;
                        $("#score").attr("hidden", false);
                        losses.textContent = loss;
                        ready = false;                        
                    }
                    guesses.textContent = guessesLeft;
                
                }else{
                    for(i=0; i<chosenAnimal.length; i++){
                        if(userGuess === splitChosenAnimal[i]){
                        wordToBeGuessed[i] = userGuess;
                        }
                    }
                }
                emptyWord.textContent = wordToBeGuessed.join(" ");

            }else{
                finalMessage.textContent = "You already tried that";
                $("#message-container").attr("hidden", false);
            }

            if(wordToBeGuessed.join("") === chosenAnimal){
                finalMessage.textContent = "Press any key to try again";
                $("#message-container").attr("hidden", false);
                title.textContent = "Congratulations!! You Won!!";
                win++;
                $("#score").attr("hidden", false);
                wins.textContent = win;
                ready = false;
            }

        }
    }
});