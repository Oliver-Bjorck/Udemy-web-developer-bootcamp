console.log("Hello from args file!");
console.log(process.argv); //returns an array containing the command-line arguments passed when the Node.js process was launched
//the first element will be the process.execPath
//the second element will be the path to the JavaScript file being executed
//any remaining elements will be additional command-line arguments