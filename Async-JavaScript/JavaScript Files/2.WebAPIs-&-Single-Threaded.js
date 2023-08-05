console.log('Sending Request to Server'); //this line runs first
setTimeout(() => { //this code runs next... sort of
    console.log('Here is your data from the server') //once the timeout is complete, this line runs
}, 3000);
console.log('I am at the end of the file'); //while the timeout is in effect, this line runs

//Java is single threaded, meaning it can only run one thing at a time
//however, there are ways around this, such as the code shown above
//this happens because it is actually the browser doing the work, not JavaScript
//Browsers are often written in languages such as C++, and come with code called web APIs
//these allow for multiple parts of code to be run at once