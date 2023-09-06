const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs"); //this will set the view engine to ejs, meaning we don't need to require it like other npm packages
app.set("views", path.join(__dirname, "/views")); //this line of code allows us to access the home.ejs file from any directory

app.get('/', 
(req, res) => {
    res.render("home.ejs") //this will render the ejs file as the html template
}) //express searches automatically fora 'views' directory as default

app.get("/random", (req, res) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render("random", {rand: randomNum}); //we can pass through objects to our template
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})