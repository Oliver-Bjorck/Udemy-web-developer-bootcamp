//try-catch can be used to ensure your code still runs to completion even in the event of an error

try { //the try segment will see if the code within runs successfully
    hello.toUpperCase();
} catch { //if it doesn't, the catch code will run instead and the rest of the code will run as normal
    console.log("Error!");
}