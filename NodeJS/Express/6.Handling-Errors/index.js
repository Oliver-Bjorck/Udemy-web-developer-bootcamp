const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny")); 
app.use((req, res, next) => { 
    console.log("This is my first middleware!")
    return next(); 
})
app.use((req, res, next) => {
    console.log("This is my second middleware!")
    return next(); 
})

app.use((req, res, next) => {
    req.requestTime = Date.now(); 
    console.log(req.method, req.path); 
    return next();
})

app.use("/dogs", (req, res, next) => {
    console.log("I love dogs!");
    return next();
})

const verifyPassword = (req, res, next) => { 
    const {password} = req.query;
    if(password === "chickennugget") {
        return next();
    }
    throw new Error("Password required!") //we can explicitly call the error handler by throwing a new error
}

app.get("/", (req, res) => {
    console.log(`request date: ${req.requestTime}`) 
    res.send("Home Page!")
})

app.get("/error", (req, res) => {
    chicken.fly() //express has a built in error handler that will catch any errors made in the app
})

app.get("/dogs", (req, res) => {
    res.send("Woof Woof")
})

app.get("/secret", verifyPassword, (req, res) => { 
    res.send("Sometimes I wear headphones in public so I don't have to talk to anyone")
})

app.use((req, res) => {
    res.status(404).send("Not Found!")
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})