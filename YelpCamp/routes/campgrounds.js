const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const {campgroundSchema} = require("../schemas.js");
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
router.get("/new", (req, res) => {
    res.render("campgrounds/new");
})

//creating new campground
router.post("/", validateCampground, catchAsync(async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash("success", "Successsfully made a new campground!");
    res.redirect(`/campgrounds/${campground._id}`);
}))

//individual campground page
router.get("/:id", catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate("reviews");
    res.render("campgrounds/show", {campground});
}))

//edit individual campground
router.get("/:id/edit", catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render("campgrounds/edit", {campground});
}))

//updating individual campground
router.put("/:id", validateCampground, catchAsync(async (req, res) => {
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    req.flash("success", "Successfully updated campground!");
    res.redirect(`/campgrounds/${campground._id}`);
}))

//delete indivual campground
router.delete("/:id", catchAsync(async (req, res) => {
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted campground!")
    res.redirect("/campgrounds");
}))

module.exports = router;