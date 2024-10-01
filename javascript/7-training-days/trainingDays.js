// Function to get a random event from three options: marathon, triathlon or pentathlon
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); 
// Generate a random number

// Return the event name depending on the random number
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function for determining the number of training days depending on the event
const getTrainingDays = event => {
  let days;

// Set the number of training days for each event
  if (event === 'Marathon') {
    days = 50; 
// Marathon requires 50 days of training
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

const name = 'Nala';
// First participant name

// Function for logging an event to the console
const logEvent = (name, event) => { 
  console.log(`${name}'s event is: ${event}`);
};

// Function for logging training time to the console
const logTime = (name, days) => { // Передаем name в качестве первого аргумента
  console.log(`${name}'s time to train is: ${days} days`);
};

// Generate an event and the number of days of training for the first participant
const event = getRandEvent();
const days = getTrainingDays(event);

// Log the event and training time for the first participant
logEvent(name, event); 
logTime(name, days); 

// Generate an event and the number of days of training for the second participant
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

// Log the event and training time for the second participant
logEvent(name2, event2);
logTime(name2, days2);