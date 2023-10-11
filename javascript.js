// Array för hemliga ord
const wordList = ["skrivbord", "elefant", "blomma", "solnedgång", "telefon", "vattenfall", "kattunge", "cyklist", "regnbåge", "klocka"]

// Array för att spara dem gissade bokstäverna
const guessedLetter = []

function selectRandomWord(){
    return wordList[Math.floor(Math.random() * wordList.length)]
}

let random = selectRandomWord()
 console.log(random)