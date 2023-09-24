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
        min: [0, "Price must be positive you dodo"] //minimum value of number
        //we can setup a custom validation error message
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
    },
    size: {
        type: String,
        enum: ["S", "M", "L"]
    }
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({name: "Cycling Jersey", price: 28.50, categories: ['Cycling'], size: "XS"});
bike.save()
.then(data => {
    console.log("It Worked!");
    console.log(data);
})
.catch(err => {
    console.log("Oh no error!");
    console.log(err);
})

// Product.findOneAndUpdate({name: "Tyre Pump"}, {price: -19.99}, {new: true, runValidators: true}) //runValidators will check updates against the schema constraints
// .then(data => {
//     console.log("It Worked!");
//     console.log(data);
// })
// .catch(err => {
//     console.log("Oh no error!");
//     console.log(err);
// })