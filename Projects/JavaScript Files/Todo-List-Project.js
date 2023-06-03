const todos = ['Collect Chciken Eggs', 'Clean Litter Box']; //creates the array

let input = prompt("What would you like to do?"); //prompts the user for an input

while (input !== 'quit' && input !== 'q') { //loops until the user quits the application
    if (input === 'list') { 
        console.log("******************");
        for (let i = 0; i < todos.length; i++) { //loops through the todos array and prints the contents
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************");
    } else if (input === 'new') {
        const newTodo = prompt("What is the new todo?"); //prompts for a new todo list item
        todos.push(newTodo); //adds the new item to the todos array
        console.log(`${newTodo} added to the todo list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Please enter the index of the item you want to delete'));
        if (!Number.isNaN(index)) { //verifies the entered value is a number
            const deleted = todos.splice(index, 1); //removes an item from the todo list based on the index the user entered
            console.log(`Deleted ${deleted[0]}`);
        }
        else {
            console.log("Unknown index")
        }
    }
    input = prompt("What would you like to do?");
}

console.log("Ok, you quit the app");