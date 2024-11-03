// Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

// Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;
let totalWins = document.querySelector("#wins");
let totalLosses = document.querySelector("#losses");
let attemptsLeft = document.querySelector("#attemptsLeft")


initializeGame();

function initializeGame() {
    guessBtn.disabled = false;
    totalWins.textContent=wins; // displays current win count
    totalLosses.textContent=losses; // displays current losses count

    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;
    updateAttempts();

    // hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    // showing the Guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); // adding focus to textbox
    playerGuess.value = ""; // clearing the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";   // clearing the feedback

    // clearing previous guesses
    document.querySelector("#guesses").textContent = "";

}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent="";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if(guess<1 || guess>99){
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "#fa6969";
        return;
    }
    attempts++;
    updateAttempts();
    console.log("Attempts: " + attempts);
    feedback.style.color = "#8ee8ef";
    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "#A0F7B3";
        wins++;
        totalWins.textContent=wins; // updates the win count
        gameOver();
    }else {
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost! The number was: " + randomNumber;
            feedback.style.color = "#fa6969";
            losses++;
            totalLosses.textContent=losses; // updates the losses count
            gameOver();
        }else if(guess > randomNumber){
            feedback.textContent = "Guess was high";
            feedback.style.color = "#FFA5D9";
        }else{
            feedback.textContent = "Guess was low";
            feedback.style.color = "#8ee8ef";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.disabled = true; // disables Guess button
    resetBtn.style.display = "inline"; // displays Reset button
}

function updateAttempts(){
    attemptsLeft.textContent=(7 - attempts); // displays number of attempts left
}