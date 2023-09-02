const cats = require('./5.1.Requiring-A-Directory'); //we can also require an entire directory
//node will look for an index. js file when an entire directory is required
//whatever is exported in the index.js file, will be exported from the directory

console.log("Required an entire directory", cats);