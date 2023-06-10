//Exercise completed in Udemy IDE and copied here

// DEFINE YOUR FUNCTION BELOW:
function lastElement(array) {
    let lastElement = array.length - 1;
    if (array.length === 0) {
        return null;
    }
    return array[lastElement];
}