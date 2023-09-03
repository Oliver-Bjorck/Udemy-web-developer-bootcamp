const express = require('express');
const app = express();

// app.use((req, res) => { //app.use will run the code below anytime we get a request from the server
//     //express creates the req and res JS objects by parsing the request and response information from the server
//     console.log("We got a new request")
//     res.send('<h1>This is my webpage</h1>') //res.send sends the HTTP response
// })
app.get('/', (req, res) => { //app.get routes HTTP GET requests to the specified path
    res.send('This is the home page!')
})

app.post('/cats', (req, res) => { //app.post routes HTTP POST requests to the specified path
    res.send('Post request to /cats!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF')
})

app.get('*', (req, res) => { //using the * will cover all other paths, this has to be put last otherwise the other app.gets won't run
    res.send("I don't know that  route")
})

app.listen(3000, () => { //app.listen will run the code below when the server on the designated port has started
    console.log("Listening on Port 3000");
})