//Exercise completed in Udemy IDE and copied here

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    let firstLetter = str.slice(0, 1);
    let restOfWord = str.slice(1, str.length);
    return firstLetter.toUpperCase() + restOfWord;
}