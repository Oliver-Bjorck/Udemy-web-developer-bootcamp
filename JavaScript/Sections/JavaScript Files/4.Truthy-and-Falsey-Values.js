const userInput = prompt("Enter something")

if (userInput) { //all js values have an inherent truthyness or falseyness about them
    console.log("Truthy") //if the user enters anything, it will print this
} else {
    console.log("Falsey") //if the prompt is left empty, it will print this
}

//Falsey values include:
//- false
//- 0
//- ""(Empty string)
//- null
//- undefined
//- NaN
//Everything else is truthy