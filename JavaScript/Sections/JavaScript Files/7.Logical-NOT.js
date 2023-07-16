let firstName = prompt("Enter your first name");

if (!firstName) { //the ! operator checks the opposite of a statement (e.g.false would become true)
    firstName = prompt("Try again!");
}

const age = 45;

if (!(age >= 0 && age < 5 || age >= 65)) { //the logical operators can be used in conjunction with one another
    console.log("You are not a baby or a senior");
}