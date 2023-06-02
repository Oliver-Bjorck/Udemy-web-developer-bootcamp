let count = 0;

while (count < 10) { //while loops are similar to for loops but with a more basic syntax
    count++;
    console.log(count);
}

const secret = "BabyHippo";

let guess = prompt("Enter thr secret code!");

while (guess !== secret) { //the loop only checks against one constraint and if the statment remains true, it will run the code
    guess = prompt("Enter the secret code!");
}
console.log("congrats!")