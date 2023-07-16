const rollDie = () => ( //Implicit returns can be used to shorten up your code
    Math.floor(Math.random() * 6) + 1 //this syntax allows you to remove the return keyword
) //instead of curly braces, it uses regular parentheses

const add = (a,b) => a + b //you can even remove the parentheses and write the code all on one line

//implicit returns ONLY work if there is only one expression within the function