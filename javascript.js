// Array of words for Hangman
const words = ["javascript", "hangman", "computer", "programming", "developer", "html", "css", "python", "java", "ruby"];

let selectedWord = "";   // The word the player needs to guess
let guessedLetters = [];  // Guessed letters by the player
let remainingGuesses = 6; // Number of remaining guesses
let isGameOver = false;   // Flag to track if the game is over

// Function to initialize the game
function initializeGame() {
    // Select a random word from the words array
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingGuesses = 6;
    isGameOver = false;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    // Update the guessed letters
    const correctGuessList = document.querySelector("#correctGuessList");
    const incorrectGuessList = document.querySelector("#wrongGuessList");

    correctGuessList.innerHTML = "";
    incorrectGuessList.innerHTML = "";

    // Update correct guesses
    for (const letter of selectedWord) {
        const li = document.createElement("li");
        li.innerText = guessedLetters.includes(letter) ? letter : "_";
        correctGuessList.appendChild(li);
    }

    // Update incorrect guesses
    for (const letter of guessedLetters) {
        if (!selectedWord.includes(letter)) {
            const li = document.createElement("li");
            li.innerText = letter;
            incorrectGuessList.appendChild(li);
        }
    }

    // Update remaining guesses
    document.querySelector("#remainingGuesses").innerText = `Remaining Guesses: ${remainingGuesses}`;

    // Update hangman image
    const hangmanImage = document.querySelector("#hangmanImage");
    hangmanImage.setAttribute("src", `images/hangman_${6 - remainingGuesses}.svg`);

    // Check if the game is over
    if (isGameOver) {
        const message = remainingGuesses === 0 ? `You lost! The word was: ${selectedWord}` : "You won! Do you want to play again?";
        alert(message);
        initializeGame();
    }
}

// Function to handle letter guesses
function guessLetter() {
    if (!isGameOver) {
        const letterInput = document.querySelector("#letterInput").value.toLowerCase();
        if (letterInput.length === 1 && /^[a-zA-Z]+$/.test(letterInput)) {
            if (guessedLetters.includes(letterInput)) {
                alert("You already guessed that letter.");
            } else {
                guessedLetters.push(letterInput);
                if (!selectedWord.includes(letterInput)) {
                    remainingGuesses--;
                }
            }
            document.querySelector("#letterInput").value = "";
            updateDisplay();
            checkGameOver();
        } else {
            alert("Please enter a valid letter.");
        }
    }
}

// Function to check if the game is over
function checkGameOver() {
    const correctGuesses = selectedWord.split("").filter(letter => guessedLetters.includes(letter)).join("");
    if (correctGuesses === selectedWord || remainingGuesses === 0) {
        isGameOver = true;
    }
}

// Event listener for the "Gissa" (Guess) button
const guessButton = document.querySelector("#guessButton");
guessButton.addEventListener("click", guessLetter);

// Event listener for the "Slumpa ett ord" (Randomize a word) button
const randomWordButton = document.querySelector("#randomWordButton");
randomWordButton.addEventListener("click", initializeGame);

// Initialize the game on page load
initializeGame();
