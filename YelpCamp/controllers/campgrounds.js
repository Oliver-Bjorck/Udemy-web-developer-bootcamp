const Campground = require("../models/campground");

//index controller
module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", {campgrounds});
}

//render new form controller
module.exports.renderNewForm = (req, res) => {
    res.render("campgrounds/new");
}

//create campground controller
module.exports.createCampground = async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash("success", "Successsfully made a new campground!");
    res.redirect(`/campgrounds/${campground._id}`);
}

//show page controller
module.exports.showCampground = async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }).populate("author");
    if(!campground) {
        req.flash("error", "Campground not found!");
        res.redirect("/campgrounds");
    }
    res.render("campgrounds/show", {campground});
}

//edit page controller
module.exports.renderEditForm = async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground) {
        req.flash("error", "Campground not found!");
        res.redirect("/campgrounds");
    }
    res.render("campgrounds/edit", {campground});
}

//update campground controller
module.exports.updateCampground = async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    req.flash("success", "Successfully updated campground!");
    res.redirect(`/campgrounds/${campground._id}`);
}

//delete campground controller
module.exports.deleteCampground = async (req, res) => {
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted campground!");
    res.redirect("/campgrounds");
}