//Exercise completed in Udemy IDE and copied here

// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (1 > num || num > 7) {
        return null;
    } else {
        return daysOfWeek[num - 1];
    }
}