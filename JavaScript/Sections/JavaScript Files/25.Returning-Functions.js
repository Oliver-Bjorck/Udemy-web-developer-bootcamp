function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function() { //You can also return functions within functions
            console.log("Congrats, I am a good function");
            console.log("You win a million dollars");
        }
    } else {
        return function () {
            alert("You have been infected by a computer virus");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
        }
    }
}

function makeBetweenFunc(min, max) { //this is called a factory function, it can be used repeatedly in different contexts
    return function(num) {
        return num >+ min && num <= max;
    }
}