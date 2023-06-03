const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let sub of subreddits) { //a for of loop operates on a sequence of values sourced from an iterable object (such as an array)
    console.log(`Visit reddit.com/r/${sub}`); //these make it easier and more readable to iterate through arrays, strings, etc.
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) { //it can be used to iterate through nested arrays as well and is a lot cleaner
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}