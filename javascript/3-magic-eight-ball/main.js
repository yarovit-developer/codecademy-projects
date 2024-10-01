let userName = "vlad";
const greeting = userName ? `Hello, ${userName}!` : "Hello!";
console.log(greeting);
let userQuestion = "What important life decision question would you like to ask the Magic Eight?";
console.log(userQuestion);


// Step 5: Generate a random number between 0 and 7 and assign it to the randomNumber variable
let randomNumber = Math.floor(Math.random() * 8);

// Step 6: (Optional) Display the generated random number if needed
// console.log(`Your random number is: ${randomNumber}`);

let eightBall;

// Use the if/else if/else statement to determine the value of eightBall based on randomNumber
if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy, try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

// Print the value eightBall
console.log(eightBall);
