// The value stored in kelvin is from todays forecast and is a constant that will not change.
const kelvin = 273;
//console.log(kelvin) // this was a check step

// This is formula converts Kelvin to celsius.
let Celsius = kelvin - 273;
//console.log(celsius) // this was a check step

// This is formula converts celsius to fahrenheit.
let Fahrenheit = Celsius * (9 / 5) + 32;

// This Formula rounds down the Fahrenheit temperature value to the nearest whole value.
//Math.floor(Fahrenheit); // this was a check step

// This formula outputs the temperature in Fahrenheit with a space between it and Newtons.
console.log(`The temperature is ${Math.floor(Fahrenheit)} degrees Fahrenheit
`);

//This formula converts newtons to celsius
let Newton = Celsius * (33/100)
// console.log(Newton) // this was a check step

// This formula outputs the temperature in Newtons.
console.log(`The temperature is ${Math.floor(Newton)} newtons`);

