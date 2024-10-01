// Constant for the temperature in Kelvin
const kelvin = 293;

// Converting Kelvin to Celsius (Celsius is 273 degrees less than Kelvin)
const celsius = kelvin - 273;

// Converting Celsius to Fahrenheit using the formula: Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

// Rounding the Fahrenheit value down to the nearest whole number
fahrenheit = Math.floor(fahrenheit);

// Output the result in Fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting Celsius to Newton using the formula: Celsius * (33/100)
let newton = celsius * (33/100);

// Rounding the Newton value down to the nearest whole number
newton = Math.floor(newton);

// Output the result in Newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);