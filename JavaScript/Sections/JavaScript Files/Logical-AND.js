const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1) { //The && logcial operator can be used to check that two things are true at the same time
    console.log("Valid Password")
} else {
    console.log("Incorrect format for password")
}