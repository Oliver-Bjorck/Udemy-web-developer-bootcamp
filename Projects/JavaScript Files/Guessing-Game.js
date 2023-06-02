let maximum = parseInt(prompt("Enter the maximum number")); //sets the maximum range of the random number based on user input

while (!maximum) { //loops if user doesn't input a valid number
    maximum = parseInt(prompt("Please enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; //generates a random number within the range the user sets
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high, try again!");
    }
    else {
        guess = prompt("Too low, try again!");
    }
}

if(guess === 'q') {
    console.log("Ok, you quit!")
}
else {
    if (attempts === 1) {
        console.log(`Congrats! You got it right! It took you ${attempts} guess`)
    }
    else {
        console.log(`Congrats! You got it right! It took you ${attempts} guesses`)
    }
}
