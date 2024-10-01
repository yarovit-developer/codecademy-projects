let input = "turpentine and turtles"; 
// The input string that will be converted to "Whale Talk"

const vowels = ['a', 'e', 'i', 'o', 'u']; 
// Array of vowels that we will search for in the input

let resultArray = []; 
// Empty array to store found vowels

for (let i = 0; i < input.length; i++) { 
    // Loop through each character of the input string

    if (input[i] === 'e') { 
        resultArray.push(input[i]); 
        // If the current character is 'e', add it to resultArray
    } else if (input[i] === 'u') { 
        resultArray.push(input[i]); 
        resultArray.push(input[i]); 
        // If the current character is 'u', add it twice to resultArray
    }

    for (let j = 0; j < vowels.length; j++) { 
        // Inner loop: iterate through the vowels array

        if (input[i] === vowels[j]) { 
            resultArray.push(input[i]); 
            // If the current character matches any vowel, add it to resultArray
        }
    }
}

let resultString = resultArray.join('').toUpperCase(); 
// Join all elements of resultArray into a string and convert it to uppercase

console.log("Whale Talk: " + resultString); 
// Output the result string as "Whale Talk"
