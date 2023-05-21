const dayOfWeek = prompt('Enter a Day').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') { //else if statements can be used for alternative possibilities
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') { //these can be chained together for as many as you need
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else { //Else statments act as a catch all for any other possibilities
    console.log("MEH")
}

const age = 8;

if (age < 5) { //once a statment is checked, it moves onto the next one
    console.log("You are a baby. You get in for free")
} else if (age < 10) { //if a statement is found to be true, it ends there and prints the outcome
    console.log("You are a child. You pay £10")
} else if (age < 65) {
    console.log("You are an adult. You pay £20")
} else if (age > 65) {
    console.log("You are a senior. You pay £10")
}