//Random number between 1 and 100
let randomNumber = Math.floor(Math.random()*100)+1;
let attempts = 0;
//Function to check the guess 
function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly`;
        message.style.color = "green";}
        else if (userGuess > randomNumber){
            message.textContent = "Too high! Try Again.";
            message.style.color = "red";}
            else if (userGuess < randomNumber){
                message.textContent = "Too low! Try Again.";
            message.style.color = "red";}
        
        // Display number of attempt 
        document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
            }