const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError")

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
    throw new AppError("Password required!", 401); //we can explicitly call the error handler by throwing a new error
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

app.get("/admin", (req, res) => {
    throw new AppError("You are not an admin!", 403)
})

app.use((req, res) => {
    res.status(404).send("Not Found!")
})

// app.use((err, req, res, next) => { //when formatted like this, express will consider this an error handler
//     console.log("*********************************") //the error handler has to be after all the other app.use handlers
//     console.log("*************ERROR***************")
//     console.log("*********************************")
//     next(err) //calling next and passing in err will hit the built in error handler
// })

app.use((err, req, res, next) => {
    const {status = 500, message = "Something went wrong"} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000")
})