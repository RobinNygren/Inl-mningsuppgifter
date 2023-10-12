// Array med ord och array som lagrar gissade bokstäver
const wordList = ["skrivbord", "elefant", "blomma", "solnedgång", "telefon", "vattenfall", "kattunge", "cyklist", "regnbåge", "klocka"];
let guessedLetters = []; 


let randomWord = ''; // Det slumpmässigt valda ordet
let displayedWord = ''; // Ordet som visas på skärmen
let guessesLeft = 6; // Max antal försök för hangman



//Eventlistner för att starta/slump, gissa, popups, span
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startGame);

const guessButton = document.querySelector('#guessButton');
guessButton.addEventListener('click', checkGuess);

const winPopUp = document.querySelector('.winPopUp');
const loosePopUp = document.querySelector('.loosePopUp');

const correctWord = document.querySelector('#correctWord');

//Funktioner:--------------------------------------------------------------------------------



function startGame() {
  const guessedLetterBox = document.querySelector('.guessedLetterBox');
  const wordBox = document.querySelector('.wordBox');

  //Starta/nollställ spelet
  guessedLetters = [];
  guessesLeft = 6;
  guessedLetterBox.textContent = '';
  displayedWord = '';
  
  // Slumpa fram ett ord
  randomWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();

  //Ändra ordet till understreck
 displayWord(wordBox);
}


//funktion för att visa det slumpade ordet som understreck
function displayWord(wordBox) {
  displayedWord = '';
  for (const letter of randomWord) {
    if (guessedLetters.includes(letter)) {
      displayedWord += letter;
    } else {
      displayedWord += '_ ';
    }
  }
  
  // Uppdatera wordBox med det visade ordet
  wordBox.textContent = displayedWord;
}

function checkGuess() {
  const guessedLetterBox = document.querySelector('.guessedLetterBox');
  const guessInput = document.querySelector('#guessInput');

  //Hämta gissning
  const guess = guessInput.value.toLowerCase();
  
  // Kontrollera om den gissade bokstaven redan har gissats
  if (guessedLetters.includes(guess)) {
    alert('Du har redan gissat denna bokstav. Gissa igen!');
    return;
  }
  
  guessedLetters.push(guess);
  guessedLetterBox.textContent = guessedLetters.join(' ');
  
  // Kontrollera om den gissade bokstaven finns i ordet
  if (randomWord.includes(guess)) {
    const wordBox = document.querySelector('.wordBox');
    displayWord(wordBox);
    
    // Kontrollera om hela ordet har gissats
    if (displayedWord === randomWord) {
      winPopUp.style.visibility = 'visible';
    }
  } else {
    // Minska antal försök kvar och visa hangman
    guessesLeft--;
    alert(`Fel gissning! ${guessesLeft} försök kvar.`);
    // ...
  }
}


//To do!
//Funktion för Hangman

//fixa alerts -> riktiga pop ups

//Ifall användaren gissar på rätt ord så ska en ”Du vann”-skärm visas med en fråga om man vill spela igen,

//Ifall användaren inte hinner gissa rätt ska en ”Du förlorade”-skärm visas med det rätta ordet och en fråga om man vill spela

//loosePopUp.style.visibility = 'visible'; när man förlorar

//spela igen knapp ska ladda om sidan