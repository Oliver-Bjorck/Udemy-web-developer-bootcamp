function sum(...nums) { //the rest paramter collects all the parameters entered into a function and puts them into an array
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) { //the rest param also allows for other parameters to be set
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`) //it'll collect all the other inputs that haven't been assigned
}