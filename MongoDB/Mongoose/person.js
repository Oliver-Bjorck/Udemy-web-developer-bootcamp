const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection Open!");
    })
    .catch(err => {
        console.log("Oh No Error!");
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual("fullName").get(function() { //virtuals are properties that are not stored on MongoDB
    return `${this.first} ${this.last}`
})

personSchema.pre("save", async function() { //pre allows you to run code before some other code code runs
    this.first = "Yo";
    this.last = "Mama";
    console.log("About to Save!");
})

personSchema.post("save", async function() { //post allows you to run code after something has run
    console.log("Just Saved!");
})

const Person = mongoose.model("Person", personSchema);