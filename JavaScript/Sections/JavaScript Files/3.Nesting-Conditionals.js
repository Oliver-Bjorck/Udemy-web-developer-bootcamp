const password = prompt("please enter a new password");

if (password.length >= 6) {
    if  (password.indexOf(' ') === -1) { //You can nest conditionals within conditionals to check for multiple things
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password too short! Must be 6+ characters");
}