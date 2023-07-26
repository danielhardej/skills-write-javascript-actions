// bring in our dependencies - this time, our dependencies include something we wrote! 
// we simply use require() to point to the location of the file we wish to bring in.
const getJoke = require("./joke");
const core = require("@actions/core");
const { context, GitHub } = require('@actions/github');

// write another asynchronous JavaScript function that stores the return value of getJoke()
// in a variable called joke.
async function run() {
  const joke = await getJoke();
  // log the joke to the console
  console.log(joke);
  core.setOutput("joke-output", joke);
}

async function run_two() {
    const github = new GitHub(process.env.GITHUB_TOKEN);
    const issueComment = {
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: 'This is a new comment!'
    };
    await github.issues.createComment(issueComment);
  }

run();
run_two();