//Array med ord
const words = ['apa', 'tjernobyl', 'hus', 'hund', 'katt', 'hiss', 'banan', 'bil', 'lägenhet', 'skrivbord'];
//Array för gissade bokstäver
let guessedLetters = []; 


//Variabel för slumpat ord och försöks räknare
let randomWord = ''; 

let remainingGuesses = 6; 


//Event listners:

//Starta spel
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startGame); // Fixa funktion för att starta/Starta om spelet.

//Gissa knapp
const guessButton = document.querySelector('#guessButton');
guessButton.addEventListener('click', guessLetter); //Fixa en funktion för att ta in gissning.

// Funktioner:


