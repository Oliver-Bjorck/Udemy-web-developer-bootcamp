const express = require('express');
const app = express();

app.use(() => { //app.use will run the code below anytime we get a request from the server
    console.log("We got a new request")
})

app.listen(3000, () => { //app.listen will run the code below when the server on the designated port has started
    console.log("Listening on Port 3000");
})