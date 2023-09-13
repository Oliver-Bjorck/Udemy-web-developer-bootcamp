const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid"); //uuid creates a universally unique id (hence the name)

app.use(express.urlencoded({ extended: true })); //this middleware parses the express body as urlencoded data
app.use(express.json()); //whereas this middleware parses the express body as JSON
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
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

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment })
})

app.patch("/comments/:id", (req, res) => { //app.patch allows us to edit and change parts of our app, in this context our comments
    const { id } = req.params; //first we are retrieving the id from the url
    const newCommentText = req.body.comment; //then retrieving the new comment text, in this scenario it's simply from the request body 
    const foundComment = comments.find(c => c.id === id); // then we find the comment attached to the id we found
    foundComment.comment = newCommentText; //lastly we're setting the new comment text to replace the old comment text
    res.redirect("/comments");
})

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !==id); //this will create a copy of the array, with the deleted comment removed
    res.redirect("/comments");
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