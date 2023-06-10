function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum; //return is most commonly used when making functions as they allow the result of the function to be stored or used in some way
} //the return keywrod also halts the function, nothing afterwards will run