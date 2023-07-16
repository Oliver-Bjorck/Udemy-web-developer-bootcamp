const add = (x,y) => { //the arrow function operates exactly the same as regular functions, just a little more concise
    return x + y;
}

const square = num => { //if only passing through one parameter, the parentheses are optional, however this only works if it is EXACTLY one
    return num * num;
}

const rollDie = () => { //when no parameters are required, the parentheses still need to be there
    return Math.floor(Math.random() * 6) + 1;
}