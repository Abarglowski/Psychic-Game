var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var loses = 0;
var guessAmount, guessedLetters, letterToGuess;

resetGame();
display();

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessAmount - 1 === 0) {
    loss();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loses").innerHTML = loses;
  document.getElementById("guessAmount").innerHTML = guessAmount;
  document.getElementById("guessed").innerHTML = guessedLetters.join(",");
}

function win() {
  wins++;
  resetGame();
}

function loss() {
  loses++;
  resetGame();
}

function fail(letter) {
  guessAmount--;
  guessedLetters.push(letter);
}

function resetGame() {
  guessAmount = 10;
  guessedLetters = [];
  letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("Letter to guess: " + letterToGuess);
}