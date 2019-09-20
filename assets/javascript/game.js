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

// console.log(chosenAnimal);
// console.log(splitChosenAnimal);
// console.log(chosenAnimal.length);
// console.log(splitChosenAnimal.length);

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
                guessedLetters.push(userGuess);
                if(chosenAnimal.indexOf(userGuess) === -1){
                    wrongGuesses.push(userGuess);
                }
                
                usedLetters.textContent = wrongGuesses.join(" ");

                if(chosenAnimal.indexOf(userGuess) === -1){
                
                    guessesLeft--;
                    if(guessesLeft === 0){
                        finalMessage.textContent = "Press any key to try again";
                        title.textContent = "You Lost!";
                        loss++;
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
            }

            if(wordToBeGuessed.join("") === chosenAnimal){
                finalMessage.textContent = "Press any key to try again";
                title.textContent = "Congratulations!! You Won!!";
                win++;
                wins.textContent = win;
                ready = false;
            }

        }
    }
});