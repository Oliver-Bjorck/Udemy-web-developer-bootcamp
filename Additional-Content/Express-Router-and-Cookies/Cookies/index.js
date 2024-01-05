const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/greet", (req, res) => {
    const {name = "Anonymous"} = req.cookies;
    res.send(`Hey There, ${name}`);
})

app.get("/setname", (req, res) => {
    res.cookie("name", "Stevie Chicks");
    res.cookie("animal", "Harlequin Shrimp");
    res.send("Ok, sent you a cookie");
})

app.listen(3000, () => {
    console.log("Serving!");
})