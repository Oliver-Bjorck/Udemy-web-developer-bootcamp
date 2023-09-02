const giveMeAJoke = require('give-me-a-joke'); //we can install packages from npm and use them in node
const colors = require('colors'); //we require the packages in order to use them
//all the required files from the package are stored in the npm_modules folder
giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
})