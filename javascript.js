const wordList = ["skrivbord", "elefant", "blomma", "solnedgång", "telefon", "vattenfall", "kattunge", "cyklist", "regnbåge", "klocka"];
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



const playAgainWin = document.querySelector('#playAgainButtonWin');
playAgainWin.addEventListener('click', () => {
  const winPopUp = document.querySelector('.winPopUp');
  winPopUp.style.visibility = 'hidden';  // Hide the win pop-up
  startGame();  // Start a new game
});

const playAgainLoose = document.querySelector('#playAgainButtonLoose');
playAgainLoose.addEventListener('click', () => {
  const loosePopUp = document.querySelector('.loosePopUp');
  loosePopUp.style.visibility = 'hidden';  // Hide the lose pop-up
  startGame();  // Start a new game
});




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
  const winPopUp = document.querySelector('.winPopUp');
  const loosePopUp = document.querySelector('.loosePopUp');
  const guessedLetterBox = document.querySelector('.guessedLetterBox');
  const guessInput = document.querySelector('#guessInput');
  const partId = hangmanPartsOrder[currentHangmanPart];
  const correctWord = document.querySelector('#correctWord');
  const part = document.querySelector(`#${partId}`);
  const guess = guessInput.value.toLowerCase();

  if (!/^[a-zA-ZåäöÅÄÖ]$/i.test(guess)) {
    alert('Använd endast bokstäver.');
    return;
  }

  if (guessedLetters.includes(guess)) {
    alert('Du har redan gissat denna bokstav. Gissa igen!');
    return;
  }

  guessedLetters.push(guess);
  guessedLetterBox.textContent = guessedLetters.join(' ');

  if (randomWord.includes(guess)) {
    const wordBox = document.querySelector('.wordBox');
    displayWord(wordBox);

    if (displayedWord === randomWord) {  //Vinner
     winPopUp.style.visibility = 'visible';
    }

  } else {
    part.style.visibility = 'visible';
    currentHangmanPart++;
    guessesLeft--;
  }

  //förlorar
  if ( guessesLeft === 0) {
    loosePopUp.style.visibility = 'visible';
    correctWord.innerText = randomWord;

    
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



