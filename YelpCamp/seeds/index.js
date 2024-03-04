//requirements
const mongoose = require("mongoose");
const cities = require("./cities");
const {places, descriptors} = require("./seedHelpers");
const Campground = require("../models/campground");

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/yelp-camp");

//upon mongodb connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: "65a5c68afa1cf933f0247dbc",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus, voluptate tenetur doloremque necessitatibus eaque ipsam corrupti recusandae incidunt quasi in natus magni. Aliquid, vel suscipit! Exercitationem, a. Iste, nobis.',
            price,
            geometry: {
              type: "Point",
              coordinates:  [
                  cities[random1000].longitude,
                  cities[random1000].latitude
                ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dcotneeog/image/upload/v1705959614/YelpCamp/e0jdudku9nc1zyrqpqtk.jpg',
                  filename: 'YelpCamp/e0jdudku9nc1zyrqpqtk'
                },
                {
                  url: 'https://res.cloudinary.com/dcotneeog/image/upload/v1705959615/YelpCamp/gvyjhpiplmvpzgh9478l.jpg',
                  filename: 'YelpCamp/gvyjhpiplmvpzgh9478l'
                }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
});