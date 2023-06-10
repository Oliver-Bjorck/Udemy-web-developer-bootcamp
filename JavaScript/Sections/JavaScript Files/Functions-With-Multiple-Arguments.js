function greet(firstName, lastName) { //functions can have multiple arguments passed through them
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) { //the order of passing through arguments is really important
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result); 
}