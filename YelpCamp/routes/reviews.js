const express = require("express");
const router = express.Router({mergeParams: true});
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware");
const catchAsync = require("../utilities/catchAsync");
const reviews = require("../controllers/reviews");

//create review
router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

//delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;