// Array för hemliga ord
const wordList = ["skrivbord", "elefant", "blomma", "solnedgång", "telefon", "vattenfall", "kattunge", "cyklist", "regnbåge", "klocka"]

// Array för att spara dem gissade bokstäverna
const guessedLetter = []
let 

function selectRandomWord(){
    return wordList[Math.floor(Math.random() * wordList.length)]
}

let randomWord = selectRandomWord()
 console.log(randomWord)