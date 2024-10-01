let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Splitting the story string into an array of words
let storyWords = story.split(' ');
// Variables for specific words to find and replace
let unnecessaryWord = 'literally'; // Word that will be removed
let misspelledWord = 'beautifull'; // Misspelled word
let badWord = 'freaking';  // Word to be replaced

// Initialize a counter for counting the total words in the story
let count = 0;
// Loop through the words and count them
storyWords.forEach((word) => {
  count++; // Increment the counter
});
console.log(count); // Output: 181 (total number of words)

// Remove all instances of the unnecessary word 'literally'
storyWords = storyWords.filter((word) => {
return word !== unnecessaryWord;
});

// Replace the misspelled word 'beautifull' with 'beautiful'
storyWords = storyWords.map((word) => {
return word === misspelledWord ? 'beautiful'
: word;
});

// Find the index of the word 'freaking' in the array
let badWordIndex = storyWords.findIndex((word) => {
 return word === badWord; // Locate the bad word
});
console.log(badWordIndex); // Output: 78 (index where 'freaking' is found)

// Replace the 'freaking' word with 'really' at index 78
storyWords[78] = 'really';

// Check if every word in the array is less than 10 characters long
let lengthCheck = storyWords.every((word) => { 
return word.length < 10;
});
console.log(lengthCheck); // Output: false (since some words are longer than 10 characters)

// Log words that are longer than 10 characters
storyWords.forEach((word) => {
word.length > 10 && console.log(word); // Output any word with more than 10 characters
});

// Join the array of words back into a single string and output the result
console.log(storyWords.join(' '));

// Закомментируйте следующую строку перед переходом к следующей задаче
// storyWords();