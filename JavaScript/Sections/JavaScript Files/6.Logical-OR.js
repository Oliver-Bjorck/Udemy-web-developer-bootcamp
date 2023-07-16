const age = 11;

if (age >= 0 && age < 5 || age >= 65) { //The || operator allows the code to run if one or both statements are true 
    console.log("Free") //You can combine logical operators 
} else if (age >= 5 && age < 10) {
    console.log("£10")
} else if (age >= 10 && age < 65) {
    console.log("£20")
} else {
    console.log("Invalid age")
}