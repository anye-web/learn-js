/*
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- Notify player of the correct Answer if loose
- let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winnigNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;
// Play Again Event Listener
game.addEventListener('mousedown', function(e) {
        if (e.target.className === 'play-again') {
            window.location.reload();
        }
    })
    // Listen for Guess btn 
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //  Validate Input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // Check if won
    if (guess === winnigNum) {
        // Game Over -Won
        gameOver(true, `The correct number is ${winnigNum}, You Won!!`);


    } else {
        // Wrong Number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game Over -Lost
            // Change Button Message
            gameOver(false, `Game over, the correct number was ${winnigNum} , YOU LOST!!`);

        } else {
            // Game Over -Continues
            // Tell User is the wrong Number
            // Clear Input
            guessInput.value = '';
            // Change Input Border Color
            guessInput.style.borderColor = 'red';
            // Set Message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

        }

    }
});
// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable Input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);
    // Play Again
    guessBtn.textContent = 'Play Again';
    guessBtn.className = 'play-again';
}
// Get winnig Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}