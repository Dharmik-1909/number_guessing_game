let playAgain = true;

while (playAgain) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;
    const maxAttempts = 10;
    let correctGuess = false;

    alert("Welcome to the Number Guessing Game! \nCan you guess the number between 1 and 100? \nYou have 10 attempts to guess the correct number.");

    while (attempts < maxAttempts && !correctGuess) {
        let userGuess = prompt("Attempt " + (attempts + 1) + " - Enter your guess (between 1 and 100):");

        if (userGuess === null) {
            alert("Game exited. Thank you for playing!");
            playAgain = false;
            break;
        }

        if (isNaN(userGuess) || userGuess === "") {
            alert("Please enter a valid number.");
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            alert("Please enter a number between 1 and 100.");
            continue;
        }

        attempts++;

        if (userGuess == randomNumber) {
            alert("Congratulations! You've guessed the correct number " + randomNumber + " in " + attempts + " attempts!");
            correctGuess = true;
        } else if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }

    if (!correctGuess && attempts >= maxAttempts) {
        alert(maxAttempts + " attempts reached! The correct number was " + randomNumber + ".");
    }

    let response = prompt("Do you want to play again? (yes/no)");

    if (response !== null && response.trim().toLowerCase() === "yes") {
        playAgain = true;
    } else {
        playAgain = false;
        alert("Thank you for playing! Goodbye!");
    }
}