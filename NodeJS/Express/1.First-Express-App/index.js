const express = require('express');
const app = express();

app.use((req, res) => { //app.use will run the code below anytime we get a request from the server
    //express creates the req and res JS objects by parsing the request and response information from the server
    console.log("We got a new request")
    res.send('<h1>This is my webpage</h1>') //res.send sends the HTTP response
})

app.listen(3000, () => { //app.listen will run the code below when the server on the designated port has started
    console.log("Listening on Port 3000");
})