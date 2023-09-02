const pi = 3.14159;

const square = x => x * x;

module.exports.add = add; //module.exports allows you to export components from one files to be used in other files
module.exports.pi = pi;
module.exports.square = square;

const math = { //you can also use an object for cleaner code
    add: add,
    pi: pi,
    square: square
}

module.exports = math; //and then export the object

module.exports.add = (x, y) => x + y;
//you can also simply add the elements directly to module.exports as shown