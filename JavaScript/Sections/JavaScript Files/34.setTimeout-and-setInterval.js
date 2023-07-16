console.log("Hello!")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000) //setTimeout runs the code after the set time limit, in this case 3000 milliseconds

const id = setInterval(() => {
    console.log(Math.random())
}, 2000) //set interval will execute code continuously based on a time interval, in this case 2000 milliseconds