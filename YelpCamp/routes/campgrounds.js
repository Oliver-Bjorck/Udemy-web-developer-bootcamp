const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const catchAsync = require("../utilities/catchAsync");
const {isLoggedIn, isAuthor, validateCampground} = require("../middleware");
const Campground = require("../models/campground");

//campground index
router.get("/", catchAsync(campgrounds.index));

//create new campground page
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

//creating new campground
router.post("/", isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground));

//individual campground page
router.get("/:id", catchAsync(campgrounds.showCampground));

//edit individual campground
router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

//updating individual campground
router.put("/:id", isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground));

//delete indivual campground
router.delete("/:id", isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

module.exports = router;