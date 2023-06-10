function callTwice(func) {
    func(); //Higher order functions can operate on/with other functions
    func();
}

function callTenTimes(f) { //in this example, it accepts a function as an argument and runs it ten times
    for(let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie) //you shouldn't use brackets when passing a function as an argument, as this will run the function immediately and pass the result through