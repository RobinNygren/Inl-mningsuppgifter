const wordList = ["skrivbord", "häst", "blomma", "solnedgång", "telefon", "vattenfall", "kattunge", "cyklist", "regnbåge", "klocka"];
let guessedLetters = [];

let randomWord = '';
let hiddenWord = '';
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
  winPopUp.style.visibility = 'hidden';  // dölj win pop-up
  startGame();  // Starta nytt spel
});

const playAgainLoose = document.querySelector('#playAgainButtonLoose');
playAgainLoose.addEventListener('click', () => {
  const loosePopUp = document.querySelector('.loosePopUp');
  loosePopUp.style.visibility = 'hidden';  // dölj lose pop-up
  startGame();  // Starta nytt spel
});

function startGame() {
  const guessedLetterDisplay = document.querySelector('.guessedLetterDisplay');
  const wordDisplay = document.querySelector('.wordDisplay');

  guessedLetters = [];
  guessesLeft = 6;
  guessedLetterDisplay.textContent = '';
  hiddenWord = '';

  randomWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();

  hideWord(wordDisplay);
  hideHangman();
}

function hideWord(wordDisplay) {
  hiddenWord = '';
  for (const letter of randomWord) {
    if (guessedLetters.includes(letter)) {
      hiddenWord += letter;
    } else {
      hiddenWord += '_ ';
    }
  }

  wordDisplay.textContent = hiddenWord;
}

function checkGuess() {
  const winPopUp = document.querySelector('.winPopUp');
  const loosePopUp = document.querySelector('.loosePopUp');
  const guessedLetterDisplay = document.querySelector('.guessedLetterDisplay');
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
  guessedLetterDisplay.textContent = guessedLetters.join(' ');

  if (randomWord.includes(guess)) {
    const wordDisplay = document.querySelector('.wordDisplay');
    hideWord(wordDisplay);

    if (hiddenWord === randomWord) {  //Vinner
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



