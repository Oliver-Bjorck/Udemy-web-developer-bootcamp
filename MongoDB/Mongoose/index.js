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
const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"}); //creates a new object in the movie model
//this hasn't saved it to the database though, to do so we need to .load the file in the Node repl and execute amadeus.save()