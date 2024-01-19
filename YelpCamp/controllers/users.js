const User = require("../models/user");

//render register controller
module.exports.renderRegister = (req, res) => {
    res.render("users/register");
}

//create new user controller
module.exports.createUser = async (req, res, next) => {
    try {
    const {email, username, password} = req.body;
    const user = new User({email, username});
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
        if(err) return next(err);
        req.flash("success", "Welcome to Yelp Camp!");
        res.redirect("/campgrounds");   
    })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("register");
    }
}

//render login controller
module.exports.renderLogin = (req, res) => {
    res.render("users/login");
}

//login user controller
module.exports.loginUser = (req, res) => {
    req.flash("success", "Welcome Back!");
    const redirectUrl = res.locals.returnTo || "/campgrounds";
    res.redirect(redirectUrl);
}

//logout user controller
module.exports.logoutUser = (req, res, next) => {
    req.logout(function(err) {
        if(err) {
            return next(err);
        }
        req.flash("success", "Successfully logged out");
        res.redirect("/campgrounds");
    })
}