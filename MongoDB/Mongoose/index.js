const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Connection Open!");
    })
    .catch(err => {
        console.log("Oh No Error!");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({ //defines the schema which maps to a MongoDB collection
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema); //creates a model class
//const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"}); //creates a new object in the movie model
//this hasn't saved it to the database though, to do so we need to .load the file in the Node repl and execute amadeus.save()

Movie.insertMany([ //insertMany() works similarly to insertMany in MongoDB
    {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
    {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
    {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
    {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
    {title: 'Moonrise kingdom', year: 2012, score: 7.3, rating: 'PG-13'},
])
.then(data => { //this function does return a promise and doesn't require use to use the .save() function
    console.log("It Worked!");
    console.log(data);
})