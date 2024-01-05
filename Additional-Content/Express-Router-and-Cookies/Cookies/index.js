const express = require("express")
const app = express();

app.get("/greet", (req, res) => {
    res.send("Hey There!");
})

app.get("/setname", (req, res) => {
    res.cookie("name", "Stevie Chicks");
    res.cookie("animal", "Harlequin Shrimp");
    res.send("Ok, sent you a cookie");
})

app.listen(3000, () => {
    console.log("Serving!")
})