var animals = ["giraffe", "rhino", "zebra", "hyena", "buffalo"];
var guessesLeft = 12;
var guessedLetters = [];
// var alreadyUsed = false;

var split = [];
var wordToBeGuessed = [];
var wordAsString;

var correctLetter = false;

chosenAnimal = animals[Math.floor(Math.random() * animals.length)];
console.log(chosenAnimal);
split = chosenAnimal.split("");
console.log(split);
console.log(chosenAnimal.length);
console.log(split.length);


document.addEventListener("DOMContentLoaded", function(event) {
    for(i=0; i<chosenAnimal.length; i++){
        wordToBeGuessed[i] = "_";
    }
    wordAsString = wordToBeGuessed.join(" ")
    console.log(wordAsString);
    empty.textContent = wordAsString;
    document.onkeydown = function(event) {
        userGuess = event.key;
        // for (i=0; i<=guessedLetters.length; i++){
        //     if(userGuess === guessedLetters[i]){
        //         finalMessage.textContent = "You already tried that";
        //     }else{
        //         guessedLetters[guessedLetters.length] = userGuess;
        //         usedLetters.textContent = guessedLetters;
        //     }
        // }
        // if(alreadyUsed === false){
            for(i=0; i<chosenAnimal.length; i++){
                if(userGuess === split[i]){
                    wordToBeGuessed[i] = userGuess;
                    correctLetter = true;
                }
            }
            wordAsString = wordToBeGuessed.join(" ")
            empty.textContent = wordAsString;
            if(correctLetter === true){
                correctLetter === false;
            }else{
                guessesLeft = guessesLeft - 1;
            }
            if(guessesLeft === 0){
                finalMessage.textContent = "You lost";
            }
            guesses.textContent = guessesLeft;
        // }else{
        //     alreadyUsed = false;
        // }
    }
});