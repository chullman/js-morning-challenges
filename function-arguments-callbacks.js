// ******
// Part 1 - Functions & Arguments
// ******

// a) Create a function called `greet`, it should return 'hello!'

const greet = (firstName) => {
  return `Hello ${firstName}`;
}

// b) Inside a console.log, call your new function

console.log(greet("chris"));

// c) Update your function to take one argument: firstName. It should return 'hello <firstName>'

// d) Create a new function called `runMe`, it should console.log `I'm running!`

const runMe = (() => {
  return console.log("I'm running!");
})();


// e) Common interview question: What is an IIFE (pronounced "iffy")? Turn runMe into an IIFE.

/*
IIFE is an Immediately Invoked Function Expression - which produces a lexical scope using JavaScript's function scoping. Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function
*/

// ******
// Part 2 - Callbacks
// ******

// a) Create a function called `finished`, it should console.log `all done`.

const finished = () => {
  return console.log('all done');
}

// b) Use setTimeout to call your `finished` method after 2.5 seconds.

setTimeout(function(){ 
  finished(); 
}, 2500);

// c) Fix the following code. End result: you should see two logs.

// function callMeBackBro (cb) {
//   console.log('Call me back is running :)')
// }

// callMeBackBro(function () {
//   console.log('This line should also run!')
// })

function callMeBackBro (cb) {
   console.log('Call me back is running :) ')
   cb()
 }

callMeBackBro(function () {
   console.log('This line should also run!')
})