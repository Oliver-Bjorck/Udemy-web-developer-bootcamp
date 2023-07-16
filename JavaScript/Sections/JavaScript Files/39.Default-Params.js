function rollDie(numSides = 6) { //Default Params will set the value passed through a function, if the user doesn't pass through a value themselves
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = "Hey there") { //the Default Param can be used when there are multiple values that can be passed through
    console.log(`${msg}, ${person}!`) //However the Deafult Param must always come last, otherwise it won't work
}