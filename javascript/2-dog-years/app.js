// My age in human years
let myAge = 33;

// Early years (the first 2 years of a dog's life)
let earlyYears = 2;

// Multiply earlyYears by 10.5 to account for the early dog years
earlyYears *= 10.5;

// Subtracting the first 2 years to calculate the remaining years in human age
let laterYears = myAge - 2;

// Multiply laterYears by 4 to convert remaining human years to dog years
laterYears *= 4;

console.log(earlyYears); // Output early dog years
console.log(laterYears); // Output later dog years

// Total dog years (sum of early and later years)
let myAgeInDogYears = earlyYears + laterYears;

// Convert my name to lowercase
let myName = "Vladyslav".toLowerCase();

// Output a string using template literals, displaying my name, age in human years, and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
