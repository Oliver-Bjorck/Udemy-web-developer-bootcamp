const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Mongo Connection Open!");
    })
    .catch(err => {
        console.log("Oh No Mongo Connection Error!");
        console.log(err);
    })

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

app.get("/dog", (req, res) => {
    res.send("Woof!");
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
})