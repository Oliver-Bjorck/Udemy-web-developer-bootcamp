const express = require("express");
const router = express.Router({mergeParams: true});
const {validateReview, isLoggedIn} = require("../middleware");
const catchAsync = require("../utilities/catchAsync");
const Campground = require("../models/campground");
const Review = require("../models/review");

//create review
router.post("/", isLoggedIn, validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash("success", "Review posted!");
    res.redirect(`/campgrounds/${campground._id}`);
}))

//delete review
router.delete("/:reviewId", catchAsync(async (req, res) => {
    const {id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted review!")
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;