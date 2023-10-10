




//Slumpa fram ord ur array
const secretWords = ['apa', 'tjernobyl', 'hus'] 
let secretWord= secretWords[Math.floor(Math.random() * secretWords.length)]


//Event listner för att trycka ned en knapp på tangentbordet
const guessedLetters = [];
document.addEventListener('keydown', function(event) {
    const guessedLetter = event.key.toLowerCase();
});