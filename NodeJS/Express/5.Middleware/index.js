const express = require("express");
const app = express();
const morgan = require("morgan"); //morgan is an example of middleware

//middleware are functions that run during the request response process

app.use(morgan("tiny")); //morgan logs the status code and response time for each request
// app.use((req, res, next) => { //it is important when using middleware to use next
//     console.log("This is my first middleware!")
//     return next(); //next will allow the server to send a response after using the middleware
// })
// app.use((req, res, next) => {
//     console.log("This is my second middleware!")
//     return next(); //next invokes the next matching middleware or route handler
// })

app.use((req, res, next) => {
    req.requestTime = Date.now(); //we now have access to requestTime in each of our route handlers
    console.log(req.method, req.path); //we can use defined middleware to show the method and path of a request
    return next();
})

app.use("/dogs", (req, res, next) => {
    console.log("I love dogs!");
    return next();
})

app.use((req, res, next) => { //we can even use middleware to create authetication (not actually like this though!)
    const {password} = req.query;
    if(password === "chickennugget") {
        return next();
    }
    res.send("Sorry, you need a password!")
})

app.get("/", (req, res) => {
    console.log(`request date: ${req.requestTime}`) //requestTime adds a timestamp of your request
    res.send("Home Page!")
})

app.get("/dogs", (req, res) => {
    res.send("Woof Woof")
})

app.get("/secret", (req, res) => {
    res.send("Sometimes I wear headphones in public so I don't have to talk to anyone")
})

app.use((req, res) => {
    res.status(404).send("Not Found!") //we can use this line of code as a 404 route, when nothing is found matching the request
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})