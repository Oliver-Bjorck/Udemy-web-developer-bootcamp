const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const passport = require("passport");
const {storeReturnTo} = require("../middleware");
const users = require("../controllers/users");

//renders registration page
router.get("/register", users.renderRegister);

//registers user
router.post("/register", catchAsync(users.createUser));

//renders login page
router.get("/login", users.renderLogin);

//logs user in
router.post("/login", storeReturnTo, passport.authenticate("local", {failureFlash: true, failureRedirect: "/login"}), users.loginUser);

//logs user out
router.get("/logout", users.logoutUser);

module.exports = router;