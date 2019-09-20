var animals = ["giraffe", "rhino", "zebra", "hyena", "buffalo"];
chosenAnimal = animals[Math.floor(Math.random() * animals.length)];
//chosenAnimal and splitChosenAnimal should be the same length
var splitChosenAnimal = [];
splitChosenAnimal = chosenAnimal.split("");
var wordToBeGuessed = [];

var guessesLeft = 12;
var guessedLetters = [];

var wordAsString;
// var guessedAsString;
// guessedAsString = guessedLetters.join(" ");

console.log(chosenAnimal);
console.log(splitChosenAnimal);
console.log(chosenAnimal.length);
console.log(splitChosenAnimal.length);

document.addEventListener("DOMContentLoaded", function(event) {
    for(i=0; i<splitChosenAnimal.length; i++){
        wordToBeGuessed[i] = "_";
    }
    wordAsString = wordToBeGuessed.join(" ")
    emptyWord.textContent = wordAsString;//this and up can be a function
    document.onkeydown = function(event) {
        userGuess = event.key;
        console.log(guessedLetters.indexOf(userGuess));
        console.log(guessedLetters);
        console.log(userGuess);
        if(guessedLetters.indexOf(userGuess) === -1){
            console.log("test");
            finalMessage.textContent = "";
            guessedLetters[guessedLetters.length] = userGuess;
            usedLetters.textContent = guessedLetters;

            if(chosenAnimal.indexOf(userGuess) === -1){
            
                guessesLeft--;
                if(guessesLeft === 0){
                    finalMessage.textContent = "You lost";
                }
                guesses.textContent = guessesLeft;
            }else{
                for(i=0; i<chosenAnimal.length; i++){
                    if(userGuess === splitChosenAnimal[i]){
                    wordToBeGuessed[i] = userGuess;
                    }
                }
            }
            wordAsString = wordToBeGuessed.join(" ")
            emptyWord.textContent = wordAsString;

        }else{
            finalMessage.textContent = "You already tried that";
        }
    }
});