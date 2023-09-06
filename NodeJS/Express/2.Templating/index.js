const express = require('express');
const app = express();

app.set("view engine", "ejs"); //this will set the view engine to ejs, meaning we don't need to require it like other npm packages

app.get('/', 
(req, res) => {
    res.render("home.ejs") //this will render the ejs file as the html template
}) //express searches automatically fora 'views' directory as default

app.listen(3000, () => {
    console.log("Listening on port 3000");
})