//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema

//review schema
const reviewSchema = new Schema({
    body: String,
    rating: Number
})

module.exports = mongoose.model("Review", review.Schema);