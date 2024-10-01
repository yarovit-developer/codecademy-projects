let humanScore = 0; // Human Player Score
let computerScore = 0; // Computer
let currentRoundNumber = 1; // Current round number

// Function to generate a random target number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Function to compare the user's and computer's guesses with the target number
function compareGuesses(userGuess, computerGuess, targetNumber) {
    const userDifference = Math.abs(targetNumber - userGuess); 
// Difference between target number and user guess
    const computerDifference = Math.abs(targetNumber - computerGuess); 
// Difference between target number and computer guess

// Check who is closest to the target number
    if (userDifference <= computerDifference) {
        return true; 
// User wins (closer to goal)
    } else {
        return false; // PC Wins
    }
}


// Function to update the score depending on the winner
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++; 
// Increase the person's score by 1
    } else if (winner === 'computer') {
        computerScore++; // Increase the computer score by 1
    }
}

// Function to move to the next round
function advanceRound() {
    currentRoundNumber++; 
// Increase the number of the current round by 1
}


// Examples of function calls with output to the console
console.log(generateTarget()); 
// Example call generateTarget() to generate a target number
console.log(generateTarget()); // Generate another target number
console.log(generateTarget()); // Generate another target number
console.log(compareGuesses(5, 7, 9)); 
// Example of calling compareGuesses() to compare guessed numbers
console.log(compareGuesses(3, 4, 9)); 
// Example of calling compareGuesses() for another case
updateScore('human'); 
// Example of calling updateScore() to update a person's score
updateScore('computer');
// Example of calling updateScore() to update a computer's score
console.log(humanScore); 
// Display the person's account; expected result: 1
console.log(computerScore); 
// Display the computer's score; expected result: 1
advanceRound(); 
// Example of calling advanceRound() to advance to the next round
console.log(currentRoundNumber); // Выводим номер текущего раунда; ожидаемый результат: 2
advanceRound(); 
// Move to next round
console.log(currentRoundNumber); 
// Display the number of the current round; expected result: 3
