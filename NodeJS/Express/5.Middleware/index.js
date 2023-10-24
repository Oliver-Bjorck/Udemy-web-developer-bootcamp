const express = require("express");
const app = express();
const morgan = require("morgan"); //morgan is an example of middleware

//middleware are functions that run during the request response process

app.use(morgan("tiny")); //morgan logs the status code and response time for each request
app.use((req, res, next) => { //it is important when using middleware to use next
    console.log("This is my first middleware!")
    return next(); //next will allow the server to send a response after using the middleware
})
app.use((req, res, next) => {
    console.log("This is my second middleware!")
    return next(); //next invokes the next matching middleware or route handler
})

app.get("/", (req, res) => {
    res.send("Home Page!")
})

app.get("/dogs", (req, res) => {
    res.send("Woof Woof")
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})