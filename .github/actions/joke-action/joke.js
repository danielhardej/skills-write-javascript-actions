//  bring in the request-promise library that we installed earlier using npm
const request = require("request-promise");

// add a key named "headers" to define the HTTP headers that the icanhazdadjoke API expects in each request that comes it's way
// icanhazdadjoke cares the most about the keys, Accept and User-Agent, so we need to make sure we fill them in.
const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

//define an asynchronous JavaScript function to make the request for us, 
//storing the JSON Object that is returned in a variable named res
async function getJoke() {
  const res = await request(options);
  return res.joke;
}

// export the newly created function so that we can use it in our main.js file
module.exports = getJoke;