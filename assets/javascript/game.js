var animals = ["giraffe", "rhino", "zebra", "hyena", "buffalo"];
chosenAnimal = animals[Math.floor(Math.random() * animals.length)];
var splitChosenAnimal = [];
//chosenAnimal and splitChosenAnimal should be the same length
splitChosenAnimal = chosenAnimal.split("");
var wordToBeGuessed = [];


var guessesLeft = 12;
var guessedLetters = [];
var alreadyUsed = false;

var wordAsString;

var correctLetter = false;


console.log(chosenAnimal);
console.log(splitChosenAnimal);
console.log(chosenAnimal.length);
console.log(splitChosenAnimal.length);

document.addEventListener("DOMContentLoaded", function(event) {
    //guesses.textContent = "12"; //shouldnt be here
    for(i=0; i<splitChosenAnimal.length; i++){
        wordToBeGuessed[i] = "_";
    }
    console.log("word to be guessed" + wordToBeGuessed);
    wordAsString = wordToBeGuessed.join(" ")
    console.log(wordAsString);
    emptyWord.textContent = wordAsString;
    document.onkeydown = function(event) {
        userGuess = event.key;
        for (i=0; i<=guessedLetters.length; i++){//maybe do indexOf() instead
            if(userGuess === guessedLetters[i]){
                alreadyUsed = true;
                finalMessage.textContent = "You already tried that";//use a variable that switches between true/false and do that check outside the for loop
            // }else{
            //     guessedLetters[guessedLetters.length] = userGuess; //use a variable that switches between true/false and do that check outside the for loop
            //     usedLetters.textContent = guessedLetters; //append here
            }
        }

        if(alreadyUsed === false){
            // usedLetters is stacking forever
            guessedLetters[guessedLetters.length] = userGuess;
            usedLetters.textContent = guessedLetters;
            for(i=0; i<chosenAnimal.length; i++){
                if(userGuess === splitChosenAnimal[i]){
                    wordToBeGuessed[i] = userGuess;
                    correctLetter = true;
                }
            }
            wordAsString = wordToBeGuessed.join(" ")
            emptyWord.textContent = wordAsString;
            // if(correctLetter === true){
            //     correctLetter === false;
            // }else{
                guessesLeft = guessesLeft - 1;
            // }
            if(guessesLeft === 0){
                finalMessage.textContent = "You lost";
            }
            guesses.textContent = guessesLeft;
        }else{
            alreadyUsed = false;
        }
    }
});