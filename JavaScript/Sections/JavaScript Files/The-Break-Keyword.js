let input = prompt("Hey,say something!");

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break; //The break keyword can be used to breakout of and stop a loop
    }
}
console.log("ok you win!")