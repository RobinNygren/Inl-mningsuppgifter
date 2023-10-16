const wordList = ["hej"];
let guessedLetters = [];

let randomWord = '';
let displayedWord = '';
let guessesLeft = 6;
let currentGuess = 0;
let currentHangmanPart = 0;

const hangmanPartsOrder = ['ground', 'scaffold', 'head', 'body', 'arms', 'legs'];


const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startGame);

const guessButton = document.querySelector('#guessButton');
guessButton.addEventListener('click', checkGuess);

function startGame() {
  const guessedLetterBox = document.querySelector('.guessedLetterBox');
  const wordBox = document.querySelector('.wordBox');

  guessedLetters = [];
  guessesLeft = 6;
  guessedLetterBox.textContent = '';
  displayedWord = '';

  randomWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();

  displayWord(wordBox);
  hideHangman();
}

function displayWord(wordBox) {
  displayedWord = '';
  for (const letter of randomWord) {
    if (guessedLetters.includes(letter)) {
      displayedWord += letter;
    } else {
      displayedWord += '_ ';
    }
  }

  wordBox.textContent = displayedWord;
}

function checkGuess() {
  const guessedLetterBox = document.querySelector('.guessedLetterBox');
  const guessInput = document.querySelector('#guessInput');

  const guess = guessInput.value.toLowerCase();

  if (guessedLetters.includes(guess)) {
    alert('Du har redan gissat denna bokstav. Gissa igen!');
    return;
  }

  guessedLetters.push(guess);
  guessedLetterBox.textContent = guessedLetters.join(' ');

  if (randomWord.includes(guess)) {
    const wordBox = document.querySelector('.wordBox');
    displayWord(wordBox);

    if (displayedWord === randomWord) {
      alert(`Grattis! Du gissade ordet. ${randomWord}`);
      startGame();
    }

  } else {
    wrongLetter();
  }
}

function wrongLetter() {
  if (guessesLeft > 0) {
    const partId = hangmanPartsOrder[currentHangmanPart];
    const part = document.querySelector(`#${partId}`);

    if (part) {
      part.style.visibility = 'visible';
    }

    currentHangmanPart++;


  }

  if ( currentHangmanPart === 6) {
    alert(`Du förlorade! Det rätta ordet var ${randomWord}`);
    startGame();
  }
}

function hideHangman() {
  for (const partId of hangmanPartsOrder) {
    const part = document.querySelector(`#${partId}`);
    if (part) {
      part.style.visibility = 'hidden';
    }
  }
  currentHangmanPart = 0;
}





// To do!
// Funktion för Hangman

// fixa alerts -> riktiga pop ups

// Ifall användaren gissar på rätt ord så ska en ”Du vann”-skärm visas med en fråga om man vill spela igen,

// Ifall användaren inte hinner gissa rätt ska en ”Du förlorade”-skärm visas med det rätta ordet och en fråga om man vill spela