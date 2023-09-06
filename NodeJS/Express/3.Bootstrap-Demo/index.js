const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public"))); //using express.static will allow you to serve static files such as css, js, or images

app.set("view engine", "ejs"); //this will set the view engine to ejs, meaning we don't need to require it like other npm packages
app.set("views", path.join(__dirname, "/views")); //this line of code allows us to access the home.ejs file from any directory

app.get('/', (req, res) => {
    res.render("home.ejs"); //this will render the ejs file as the html template
}) //express searches automatically fora 'views' directory as default

app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Rocket", "Monty", "Stephanie", "Winston"
    ]
    res.render("cats", { cats})
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render("subreddit", {...data});
    } else {
        res.render("notfound", {subreddit})
    }
    
})

app.get("/random", (req, res) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render("random", {rand: randomNum}); //we can pass through objects to our template
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})