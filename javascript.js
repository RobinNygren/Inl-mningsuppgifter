


//Array för hemliga ord
const secretWords = ['apa', 'tjernobyl', 'hus', 'hund', 'katt', 'hiss', 'banan', 'bil', 'lägenhet', 'skrivbord']

//Slumpa fram ord ur array
let secretWord= secretWords[Math.floor(Math.random() * secretWords.length)]

//Array för gissade bokstäver
const guessedLetters = []

//Array för rätt gissade bokstäver
const correctLetters = []


//Event listner för att trycka ned en knapp på tangentbordet

document.addEventListener('keydown', function(event) {
    const guessedLetter = event.key.toLowerCase();
});