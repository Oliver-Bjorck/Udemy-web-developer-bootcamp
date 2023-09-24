const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection Open!");
    })
    .catch(err => {
        console.log("Oh No Error!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //required means this field has to be filled in
        maxlength: 20 //maximum length of string
    },
    price: {
        type: Number,
        required: true,
        min: 0 //minimum value of number
    },
    onSale: {
        type: Boolean,
        default: false //sets the value if nothing entered by user
    },
    categories: [String], //this data is entered in an array and will be of type string (it will convert to a string if not already)
    qty: {
        online: { //we can also have sub properties for an object
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({name: "Bike Helmet", price: 19.5, categories: ['Cycling', 'Safety']});
bike.save()
.then(data => {
    console.log("It Worked!");
    console.log(data);
})
.catch(err => {
    console.log("Oh no error!");
    console.log(err);
})