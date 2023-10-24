const express = require("express");
const app = express();
const morgan = require("morgan"); //morgan is an example of middleware

//middleware are functions that run during the request response process

app.use(morgan("tiny")); //morgan logs the status code and response time for each request

app.get("/", (req, res) => {
    res.send("Home Page!")
})

app.get("/dogs", (req, res) => {
    res.send("Woof Woof")
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})