const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true })); //this middleware parses the express body as urlencoded data
app.use(express.json()); //whereas this middleware parses the express body as JSON
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd"
    },
    {
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", {comments});
})

app.get("/tacos", (req, res) => {
    res.send("Get /tacos response");
})

app.post("/tacos", (req, res) => { //.post can be used to use the post route rather than the get route
    const {meat, qty} = req.body; //req.body contains key value pairs of data submitted in the request body
    res.send(`OK, here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
    console.log("On port 3000!")
})