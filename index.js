// Write your code in this file!
const currentUser = "Grace Hopper"

// Concatenate strings with the + operator
// const welcomeMessage = "Welcome to Flatbook," + " " + currentUser + "!"

// Using template literals 
const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`

// Concatenate strings with the + operator
// const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!"

// Using template literals 
const excitedWelcomeMessage = `${"Welcome to Flatbook, ".toUpperCase()} ${currentUser.toUpperCase()} !`


// Concatenate strings with the + operator
// const shortGreeting = "Welcome, " + currentUser[0] + "!"

// Using template literals 
const shortGreeting = `Welcome, ${currentUser[0]} !`




// Playing with string methods : string[@@iterator]() & string.slice()
/*

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

console.log(firstInitial)
console.log(restOfName)

*/