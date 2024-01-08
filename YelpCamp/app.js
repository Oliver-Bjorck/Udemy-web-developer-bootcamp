//requirements
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const ExpressError = require("./utilities/ExpressError");
const methodOverride = require("method-override");
const campgrounds = require("./routes/campgrounds");
const reviews = require("./routes/reviews");

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/yelp-camp");

//upon mongodb connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const app = express();

//setting view engine and folder
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//parses url-encoded payloads
app.use(express.urlencoded({ extended: true }));

//method override (allows methods other than get and post)
app.use(methodOverride("_method"));

//serving public folder
app.use(express.static(path.join(__dirname, "public")));

//session cookie configuration
const sessionConfig = {
    secret: "thisshouldbeabettersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

//using app routes
app.use("/campgrounds", campgrounds);
app.use("/campgrounds/:id/reviews", reviews);

app.get("/", (req, res) => {
    res.render("home");
})

//404 message
app.all("*", (req, res, next) => {
    next(new ExpressError("Page Not Found", 404))
})

//error handler
app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if(!err.message) err.message = "Something went wrong!"
    res.status(statusCode).render("error", {err})
})

//server listener
app.listen(3000, () => {
    console.log("Serving on port 3000");
})