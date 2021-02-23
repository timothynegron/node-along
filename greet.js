const getInput = require("./get-input.js");

// 1. get the user's name
// 2. save it in a variable
const userName = getInput();

// 3. print out what's in that variable
console.log('Hello ' + userName + '!');



// Notes:
// special node command called require
// require says im going to open that file
// pass a file in the parenthesis
// .exports means make it available
// get input will return