const {campgroundSchema, reviewSchema} = require("./schemas.js");
const ExpressError = require("./utilities/ExpressError");
const Campground = require("./models/campground")

//logged in verification
module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You must be signed in");
        return res.redirect("/login");
    }
    next();
}

//campground validation
module.exports.validateCampground = (req, res, next) => {
    const {error} = campgroundSchema.validate(req.body);
    if(error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

//review validation
module.exports.validateReview = (req, res, next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

//author validation
module.exports.isAuthor = async(req, res, next) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id)) {
        req.flash("error", "You do not have permission to do that");
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}

//stores returnTo data in locals rather than session
module.exports.storeReturnTo = (req, res, next) => {
    if(req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}