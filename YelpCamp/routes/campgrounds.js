const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const {campgroundSchema} = require("../schemas.js");
const {isLoggedIn} = require("../middleware");
const ExpressError = require("../utilities/ExpressError");
const Campground = require("../models/campground");

//campground validation
const validateCampground = (req, res, next) => {
    const {error} = campgroundSchema.validate(req.body);
    if(error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

//campground index
router.get("/", catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", {campgrounds})
}))

//create new campground page
router.get("/new", isLoggedIn, (req, res) => {
    res.render("campgrounds/new");
})

//creating new campground
router.post("/", isLoggedIn, validateCampground, catchAsync(async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash("success", "Successsfully made a new campground!");
    res.redirect(`/campgrounds/${campground._id}`);
}))

//individual campground page
router.get("/:id", catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate("reviews").populate("author");
    console.log(campground);
    if(!campground) {
        req.flash("error", "Campground not found!");
        res.redirect("/campgrounds");
    }
    res.render("campgrounds/show", {campground});
}))

//edit individual campground
router.get("/:id/edit", isLoggedIn, catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground) {
        req.flash("error", "Campground not found!");
        res.redirect("/campgrounds");
    }
    if(!campground.author.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that");
        return res.redirect(`/campgrounds/${id}`);
    }
    res.render("campgrounds/edit", {campground});
}))

//updating individual campground
router.put("/:id", isLoggedIn, validateCampground, catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that");
        return res.redirect(`/campgrounds/${id}`);
    }
    const camp = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    req.flash("success", "Successfully updated campground!");
    res.redirect(`/campgrounds/${campground._id}`);
}))

//delete indivual campground
router.delete("/:id", isLoggedIn, catchAsync(async (req, res) => {
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted campground!")
    res.redirect("/campgrounds");
}))

module.exports = router;