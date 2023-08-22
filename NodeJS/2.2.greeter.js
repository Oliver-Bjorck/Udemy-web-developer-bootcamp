const args = process.argv.slice(2); //we can use this to accept arguments from Node
//since we don't want the frist two elements of the array, we can slice them out
for(let arg of args) {
    console.log(`Hi there, ${arg}`);
}