// At the beginning of the game, set wins to 0, set losses to 0, set guesses left to 9, set guesses so far to an empty string.

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Computer chooses a random letter of the alphabet from a-z.

var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

// Take the user entered letter and display that letter.

var userLetter =
document.getElementById("userLetter");

document.onkeyup = function(event){
    userLetter.textContent = event.key;
};

// Convert user's letter to lower case if the user enters an upper case letter.
//var lowerCaseLetter = userLetter.toLowerCase();
// (didn't get this to work)

//If the user's letter is equal to the computer's random letter, add 1 point to Wins and start the game over.

if (userLetter === randomLetter) {
    wins = wins + 1;
    console.log("wins");
}

// If the letters are not equal,decrease guesses left by 1, and add user's guessed letter to the string of guessed letters.

else {
    guessLeft = guessLeft - 1;
}

// If "guesses left" equals 0, increase Losses by 1 and restart the game.

if (guessLeft === 0){
    losses = losses + 1;
}

    
   