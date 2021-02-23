const getInput = require("./get-input.js");

// 1. take in our user's age and save it in a variable
const userAge = getInput();

// 2. check if they want help and print out a message
if(userAge === '--help'){
    console.log('This function returns your mental age.')
    console.log('Please enter your age after "node mental-age.js" and a space')
}

// 3. print out the user's age in a sentence
console.log('You are ' + userAge + ' years old.');

// 4. print out the user's mental age in a sentence
console.log('Your mental age is ' + Number((userAge / 2) + 3) + ' years old.');