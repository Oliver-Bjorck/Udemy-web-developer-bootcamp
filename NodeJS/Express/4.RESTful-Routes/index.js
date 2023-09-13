const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid"); //uuid creates a universally unique id (hence the name)

app.use(express.urlencoded({ extended: true })); //this middleware parses the express body as urlencoded data
app.use(express.json()); //whereas this middleware parses the express body as JSON
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd"
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", {comments});
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})

app.post("/comments", (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()}); //uuid allows us to attach ids to new comments, and have them be entirley unique
    res.redirect("/comments"); //res.redirect does what it says, it will redirect to the desired destination
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment });
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