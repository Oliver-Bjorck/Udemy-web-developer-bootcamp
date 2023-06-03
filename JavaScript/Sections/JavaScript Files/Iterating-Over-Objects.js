const testScores = { //object literals are not iterable so the for of loop won't work
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for (let person in testScores) { //instead you will need to use the for in loop
    console.log(`${person} scored ${testScores[person]}`);
}