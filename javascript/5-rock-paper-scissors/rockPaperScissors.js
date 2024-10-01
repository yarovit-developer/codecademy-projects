// Function to get the user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); // Convert input to lowercase
  
// Check if the input is a valid choice
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput; 
// Return the correct selection
  } else {
    console.log('Error, please type: rock, paper or scissors.'); 
// Display an error message
  }
}

// Function for selecting a computer
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); //Generating a random number
  switch (randomNumber) {
    case 0:
     return 'rock'; // Return 'rock' if the number is 0
    case 1:
     return 'paper'; // Return 'paper' if the number is 1
    case 2:
     return 'scissors'; // Return 'scissors' if the number is 2
  }
};

// Function to determine the winner
const determineWinner = (UserChoice, computerChoice) => {
	
	// Check if the game is a tie
  if (UserChoice === computerChoice) {
    return 'This game is a tie!'; // Returning a tie message
  }
  if (UserChoice === 'rock') {
// If the user has selected a rock
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  };
  
// Check the user's choice
    if (UserChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  };

   if (UserChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
    } else {
      return 'Congratulations, you won!';
    }
  }

// Secret choice "bomb" // The user always wins if he chooses "bomb"
  if (UserChoice === 'bomb') {
    return 'Congratulations, you won!';
  }
};

const PlayGame = () => {
  const userChoice = getUserChoice('paper');  // Here you can replace 'paper' with 'bomb'
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

PlayGame();




