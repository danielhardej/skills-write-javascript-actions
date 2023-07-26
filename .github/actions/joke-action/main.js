// bring in our dependencies - this time, our dependencies include something we wrote! 
// we simply use require() to point to the location of the file we wish to bring in.
const getJoke = require("./joke");
const core = require('@actions/core');

// write another asynchronous JavaScript function that stores the return value of getJoke()
// in a variable called joke.
async function run() {
  const joke = await getJoke();
  // log the joke to the console
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();